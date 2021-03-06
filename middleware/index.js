const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 12;
const APP_SECRET = "jfd8tj458r9fjvckfj43n5m43mfdkmdjf4285942";

const hashPassword = async (password) => {
  /**
     @param {password}
     */
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    return hashedPassword;
  } catch (error) {
    console.log("Error Hashing Password");
    throw error;
  }
};

const passwordValid = async (submittedPassword, storedPassword) => {
  /**
   * @param {submittedPassword}
   * @param {storedPassword}
   */
  let valid = await bcrypt.compare(submittedPassword, storedPassword);
  return valid;
};

const readToken = (request, response, next) => {
  let token = request.headers.authorization.split(" ")[1];
  token ? (response.locals.token = token) : (response.locals.token = null);
  next();
};

const verifyJwt = (request, response, next) => {
  const { token } = response.locals;
  let valid = jwt.verify(token, APP_SECRET);
  if (valid) {
    response.locals.token = valid;
    return next();
  }
  response.status(401).send({ message: "Unauthorized", status: "Error" });
};

const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET);
  return token;
};

module.exports = {
  hashPassword,
  readToken,
  passwordValid,
  verifyJwt,
  createToken,
};
