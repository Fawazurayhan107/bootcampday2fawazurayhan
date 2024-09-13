import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
    const userPayload = req.body;
    try {
      const user = await registerUser(userPayload);
      res.status(201).json({ user, message:" User Created"});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

export const login = async (req, res) => {
  const userPayload = req.body;
  try {
    const user = await loginUser(userPayload);
    res.status(200).json({ token: user, message:"User Logged in"})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};