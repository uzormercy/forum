import { registerUser } from "./user.service";

export const register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  const user = await registerUser({
    firstname,
    lastname,
    username,
    email,
    password,
  });
  if (!user.success) {
    return res.status(400).json(user);
  }
  return res.status(201).json(user);
};
