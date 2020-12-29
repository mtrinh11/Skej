const { Requests } = require("../models");

const CreateRequest = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let requestedId = parseInt(req.params.requested_id);
    const request = await Requests.create({
      user_id: userId,
      requested_id: requestedId,
    });
    res.send(request);
  } catch (error) {
    throw error;
  }
};

const DeleteRequest = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let requestedId = parseInt(req.params.requested_id);
    await Requests.destroy({
      where: {
        user_id: userId,
        requested_id: requestedId,
      },
    });
    res.send({ msg: "request deleted" });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateRequest,
  DeleteRequest,
};
