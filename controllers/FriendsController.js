const { Friends, User } = require("../models");

const AddFriend = async (request, response) => {
  //this is going to be weird because somebody needs to confirm the friendship
  try {
    let userId = parseInt(request.params.user_id);
    let friendId = parseInt(request.params.friend_id);
    let newFriendship = await Friends.create({
      user_id: userId,
      friend_id: friendId,
    });
    console.log(
      "FriendController: AddFriend hits. User and Friend:",
      newFriendship
    );
    response.send(newFriendship);
  } catch (error) {
    console.log("FriendController: Friend fails");
    throw error;
  }
};

const GetFriend = async (request, response) => {
  try {
    //not wholly confident on this one
    let userId = parseInt(request.params.user_id);
    let friendId = parseInt(request.params.friend_id);
    const friend = await Friends.findOne({
      where: {
        user_id: userId,
        friend_id: friendId,
      },
      include: [
        { model: User, as: "friends", attributes: ["id", "user_name"] },
      ],
    });
    response.send(friend);
    console.log("FriendController: GetFriend hits");
  } catch (error) {
    console.log("FriendController: GetFriend fails");
    throw error;
  }
};

const GetAllFriends = async (request, response) => {
  try {
    let userId = parseInt(request.params.user_id);
    const allFriends = await Friends.findAll({
      where: { user_id: userId },
      include: [
        { model: User, as: "friends", attributes: ["id", "user_name"] },
      ],
    });
    response.send(allFriends);
    console.log("FriendController: GetAllFriends hits");
  } catch (error) {
    console.log("FriendController: GetAllFriends fails");
    throw error;
  }
};

const RemoveFriend = async (request, response) => {
  try {
    let userId = parseInt(request.params.user_id);
    let friendId = parseInt(request.params.friend_id);
    await Friends.destroy({
      where: {
        user_id: userId,
        friend_id: friendId,
      },
    });
    console.log("FriendController: RemoveFriend hits");
    response.send({
      message: `Deleted friendship with an id of ${friendId}. :C`,
    });
  } catch (error) {
    console.log("FriendController: RemoveFriend fails");
    throw error;
  }
};

module.exports = {
  AddFriend,
  GetFriend,
  GetAllFriends,
  RemoveFriend
};
