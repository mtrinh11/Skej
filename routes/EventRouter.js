const Router = require("express").Router();
const controller = require("../controllers/EventController");

Router.post("/create", controller.CreateEvent);
Router.get("/all", controller.GetAllEvents);
Router.get("/:event_id", controller.GetOneEvent);
Router.get("/user/:user_id", controller.GetEventsByUser);
Router.get("/friend/:user_id/", controller.GetEventsOfFriends);
Router.put("/:event_id", controller.EditEvent);
Router.delete("/:event_id", controller.DeleteEvent);

module.exports = Router;
