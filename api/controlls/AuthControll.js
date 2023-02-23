import User from "../models/authModel.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).send("User Created Succesfuly!");
  } catch (err) {
    next(err);
  }
};
