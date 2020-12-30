const { hashPassword, passwordValid, createToken } = require("../middleware");
const { User, Event, Todo, Alerts, Requests } = require("../models");

const CreateUser = async (request, response) => {
  try {
    const { name, email, userName, password } = request.body;
    const user_name = userName;
    const password_digest = await hashPassword(password);
    const user = await User.create({ name, user_name, email, password_digest });
    response.send(user);
  } catch (error) {
    throw error;
  }
};

const GetUser = async (request, response) => {
  try {
    const user = await User.findByPk(request.params.user_id, {
      attributes: ["id", "user_name"],
      include: [
        {
          model: Requests,
          include: [{ model: User, attributes: ["id", "user_name"] }],
        },
        { model: Alerts },
        { model: Event },
        { model: Todo },
        { model: User, as: "friends", attributes: ["id", "user_name"] },
      ],
    });
    response.send(user);
  } catch (error) {
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
      (await passwordValid(request.body.password, user.password_digest))
    ) {
      let payload = {
        _id: user.id,
        userName: user.user_name,
      };
      let token = createToken(payload);
      return response.send({ user, token });
    }
    return response.status(401).send({ message: `Unauthorized!` });
  } catch (error) {
    throw error;
  }
};

const SessionStatus = async (request, response) => {
  try {
    const { token } = response.locals;
    const user = await User.findByPk(token._id, {
      attributes: ["id", "user_name"],
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
  SessionStatus
};
