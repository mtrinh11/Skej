const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const RequestsRouter = require("./RequestsRouter");
const EventRouter = require("./EventRouter")
const FriendsRouter = require("./FriendsRouter")
const TodoRouter = require("./TodoRouter")


Router.use("/user", UserRouter);
Router.use("/event", EventRouter)
Router.use("/friends", FriendsRouter)
Router.use("/todo", TodoRouter)
Router.use("/requests", RequestsRouter);


module.exports = Router;
