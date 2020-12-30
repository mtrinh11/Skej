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
    await Friends.create({
      user_id: friendId,
      friend_id: userId,
    });
    response.send(newFriendship);
  } catch (error) {
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
  } catch (error) {
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
  } catch (error) {
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
    await Friends.destroy({
      where: {
        user_id: friendId,
        friend_id: userId,
      },
    });
    response.send({
      message: `Deleted friendship. :C`,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  AddFriend,
  GetFriend,
  GetAllFriends,
  RemoveFriend
};
