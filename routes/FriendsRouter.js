const Router = require("express").Router();
const controller = require("../controllers/FriendsController");

Router.get("/:user_id/friends", controller.GetAllFriends);
Router.post("/:user_id/:friend_id", controller.AddFriend);
Router.get("/:friend_id", controller.GetFriend);
Router.delete("/user_id/:friend_id", controller.RemoveFriend);

module.exports = Router;
