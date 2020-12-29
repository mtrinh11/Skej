const Router = require("express").Router();
const controller = require("../controllers/FriendsController");

Router.post("/addFriend", controller.AddFriend)
Router.get("/:friendId", controller.GetFriend)
Router.get("/:userId/friends", controller.GetAllFriends)
Router.delete("/:friendId", controller.RemoveFriend)
