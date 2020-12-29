const { hashPassword, passwordValid, createToken } = require("../middleware");
const { User, Event, Todo, Alerts } = require("../models");

const CreateUser = async (request, response) => {
  try {
    const { name, email, username, password } = request.body;
    const passwordDigest = await hashPassword(password);
    const user = await User.create({ name, username, email, passwordDigest });
    console.log("UserController CreateUser hits. User:", user);
    response.send(user);
  } catch (error) {
    console.log("UserController CreateUser fails");
    throw error;
  }
};

const GetUser = async (request, response) => {
  try {
    const user = await User.findByPk(request.params.user_id, {
      attributes: ["id", "user_name"],
      include: [
        { model: Alerts },
        { model: Event },
        { model: Todo },
        { model: User, as: "friends", attributes: ["id", "user_name"] },
      ],
    });
    response.send(user);
    console.log("UserController GetUser hits. User:", user);
  } catch (error) {
    console.log("UserController GetUser fails");
    throw error;
  }
};

const LoginUser = async (request, response) => {
  try {
    const user = await User.findOne({
      where: { email: request.body.email },
      raw: true,
    });
    if (
      user &&
      (await passwordValid(request.body.password, user.passwordDigest))
    ) {
      let payload = {
        _id: user.id,
        username: user.username,
      };
      let token = createToken(payload);
      console.log("UserController LoginUser success, Payload:", payload);
      return response.send({ user, token });
    }
    console.log("UserController LoginUser bad password");
    return response.status(401).send({ message: `Unauthorized!` });
  } catch (error) {
    console.log("UserController LoginUser fails");
    throw error;
  }
};

const SessionStatus = async (request, response) => {
  try {
    const { token } = response.locals;
    const user = await User.findByPk(token._id, {
      attributes: ["id", "username", "email]"],
    });
    response.send({ user, status: "OK" });
  } catch (error) {
    response.status(401).send({ message: "invalid session" });
    throw error;
  }
};

module.exports = {
  CreateUser,
  GetUser,
  LoginUser,
  SessionStatus,
};
