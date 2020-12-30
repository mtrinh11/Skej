const { Event, User, Friends } = require("../models");

const CreateEvent = async (request, response) => {
  try {
    const body = request.body;
    const event = await Event.create({
      user_id: body.userId,
      title: body.title,
      description: body.description,
      start: body.start,
      end: body.end,
      start_time: body.startTime,
      end_time: body.endTime,
      importance: body.importance,
      private: body.private,
    });
    console.log("EventController: CreateEvent hits. Event:", event);
    response.send(event);
  } catch (error) {
    console.log("EventController: CreateEvent fails");
    throw error;
  }
};

const GetOneEvent = async (request, response) => {
  try {
    const oneEvent = await Event.findByPk(request.params.event_id);
    console.log("EventController: GetOneEvent hits, event:", oneEvent);
    response.send(oneEvent);
  } catch (error) {
    console.log("EventController: GetOneEvent fails");
    throw error;
  }
};

const GetAllEvents = async (request, response) => {
  try {
    const allEvents = await Event.findAll();
    console.log("EventController: GetAllEvents hits");
    response.send(allEvents);
  } catch (error) {
    console.log("EventController: GetAllEvents fails");
    throw error;
  }
};

const GetEventsByUser = async (request, response) => {
  try {
    const userId = request.params.user_id;
    const userEvents = await Event.findAll({
      where: { user_id: userId },
    });
    console.log("EventController: GetEventsByUser hits");
    response.send(userEvents);
  } catch (error) {
    console.log("EventController: GetEventsByUser fails");
    throw error;
  }
};
const EditEvent = async (request, response) => {
  try {
    let eventId = parseInt(request.params.event_id);
    let eventDetails = request.body;
    let editedEvent = await Event.update(eventDetails, {
      where: { id: eventId },
    });
    console.log("EventController: EditEvent hits");
    response.send(editedEvent);
  } catch (error) {
    console.log("EventController: EditEvent fails");
    throw error;
  }
};

const DeleteEvent = async (request, response) => {
  try {
    let eventId = parseInt(request.params.event_id);
    await Event.destroy({
      where: {
        id: eventId,
      },
    });
    response.send({ message: `Deleted Event with an id of ${eventId}` });
    console.log("EventController: DeleteEvent hits");
  } catch (error) {
    console.log("EventController: DeleteEvent fails");
    throw error;
  }
};

const GetEventsOfFriends = async (req, res) => {
  try {
    const friends = await Friends.findAll({
      where: { user_id: req.params.user_id },
      include: [
        {
          model: User,
          as: "friends",
          attributes: ["id"],
        },
      ],
    });
    let events = [];
    for (let i = 0; i < friends.length; i++) {
      let id = friends[i].friend_id;
      const event = await Event.findAll({
        where: { user_id: id, private: true },
        attributes: ["start", "end", "start_time", "end_time"],
        include: [
          {
            model: User,
            attributes: ["id", "user_name"],
          },
        ],
        where: { user_id: id, private: false },
        include: [
          {
            model: User,
            attributes: ["id", "user_name"],
          },
        ],
      });
      event.length > 0 ? (events = events.concat(event)) : null;
    }
    res.send(events);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateEvent,
  GetOneEvent,
  GetAllEvents,
  GetEventsByUser,
  EditEvent,
  DeleteEvent,
  GetEventsOfFriends,
};
