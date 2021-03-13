const User = require("../models/user");

exports.createUser = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email) {
    return res.status(422).json({
      status: 422,
      user: {
        firstName: "firstName is required",
        lastName: "lastName is required",
        email: "enail is required",
      },
    });
  }
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json({
      status: 201,
      message: "Create successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({
        status: 409,
        message: "Email already exists",
      });
    } else {
      res.status(500).send({
        status: 500,
        message: `Something wen't wrong`,
      });
    }
  }
};

exports.readUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send({
      status: 200,
      response: user,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.readUserById = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await User.findById(id);
    res.status(200).send({
      status: 200,
      response: user,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) {
      return res.status(500).send({
        status: 500,
        message: `user not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      message: "Update successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({
        status: 409,
        message: "Email already exists",
      });
    } else {
      res.status(500).send({
        status: 500,
        message: `Something wen't wrong`,
      });
    }
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await User.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
    if (!user) {
      return res.status(500).send({
        status: 500,
        message: `user not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      message: "Delete successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};
