import React from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import {
  createEvent, 
  editEvent,
  getEvent,
  getEventsByUser,
  getFriendEvents,
  deleteEvent,
  getAllEvents
} from '../store/actions/EventActions'


const mapStateToProps = (state) => {
  return {
    eventState: state.eventState,
    friendState: state.friendState,
    requestState:
  };
};

const mapActionToProps = (dispatch) => {
  return {
    createEvent: (formData) => dispatch(createEvent(formData)),
    getAllEvents: () => dispatch(getAllEvents()),
    getEvent: (eventId) => dispatch(getEvent(eventId)),
    getEventsByUser: (userId) => dispatch(getEventsByUser(userId)),
    getFriendEvents: (friendId) => dispatch(getFriendEvents(friendId)),
    editEvent:(eventId, formData) => dispatch(editEvent(eventId, formData)),
    deleteEvent:(eventId) => dispatch(deleteEvent(eventId)),
    //friend actions
    addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId)),

    //request actions
    createRequest: (userId, requestedId) => dispatch(createRequest(userId, requestedId)),
    deleteRequest: (userId, requestedId) => dispatch(deleteRequest(userId, requestedId))
    // todo actions
  };
};


const Calendar = () => {


  const handleDateClick = (e) => {
    alert(e.dateStr)
  }

  return (
    <div className="calendar">
      <FullCalendar 
      plugins={[timeGridPlugin, interactionPlugin]} 
      initialView="timeGridWeek"
      editable="True"
      droppable="True"
      selectable="True"
      slotEventOverlap="True"
      nowIndicator="True"
      dateClick={handleDateClick}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
