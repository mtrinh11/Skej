const Router = require("express").Router();
const controller = require("../controllers/RequestsController");

Router.post("/:user_id/:requested_id", controller.CreateRequest);
Router.delete("/:user_id/:requested_id", controller.DeleteRequest);

module.exports = Router;
