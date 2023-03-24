const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");

exports.register = (name, email, password) => {
  if (!name || !email || !password) throw new Error("User not registered");
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  const newUser = new User({ name, email, password: hash });

  const saveUser = newUser.save();

  return saveUser;
};

exports.login = async (email, password) => {
  if (!email || !password) throw new Error("Wrong credentials");

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const pass = await bcrypt.compare(password, user.password);
  console.log("user", pass);

  if (!pass) throw new Error("Password is incorrect");

  const token = jwt.sign({ id: user._id }, process.env.KEY_JWT, {
    expiresIn: "1h",
  });

  return { token, ...user._doc };
};
