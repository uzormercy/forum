import bcrypt, { genSaltSync } from "bcryptjs";

export const hashPassword = (password) => {
  const salt = genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export const generateUsernameSuggestions = (username) => {
  const randomNumbers = () => Math.floor(100 + Math.random() * 900); // Generate a 3-digit number
  const words = ["official", "dev", "pro", "the", "x", "real", "hub"];

  return [
    `${username}${randomNumbers()}`,
    `${username}_${randomNumbers()}`,
    `${username}.${randomNumbers()}`,
    `${words[Math.floor(Math.random() * words.length)]}${username}`,
    `${username}${words[Math.floor(Math.random() * words.length)]}`,
  ];
};
