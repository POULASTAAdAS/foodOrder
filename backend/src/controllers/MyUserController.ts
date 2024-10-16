import { error } from "console";
import { Request, Response } from "express";
import User from "../models/user";

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      res.status(200).json({ message: "user not found" });
      return;
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.country = country;
    user.city = city;

    await user.save();
    res.status(200).json({ message: "User Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).json({ message: "user found" });
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const curretUser = await User.findOne({ _id: req.userId });
    if (!curretUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(curretUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error geting user data" });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
  getCurrentUser,
};
