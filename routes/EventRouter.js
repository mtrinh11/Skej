const Router = require("express").Router();
const controller = require("../controllers/EventController");

Router.post("/create", controller.CreateEvent)
Router.get("/all", controller.GetAllEvents)
Router.get("/:eventId", controller.GetOneEvent)
Router.get("/:userId/:eventId", controller.GetEventsByUser)
Router.get("/friend/:friendId/", controller.GetEventsOfFriends)
Router.put("/:eventId", controller.EditEvent)
Router.delete("/:eventId", controller.DeleteEvent)


module.exports = Router