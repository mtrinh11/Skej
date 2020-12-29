const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const RequestsRouter = require("./RequestsRouter");

Router.use("/user", UserRouter);
Router.use("/requests", RequestsRouter);

module.exports = Router;
