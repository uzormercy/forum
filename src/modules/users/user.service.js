import { generateUsernameSuggestions, hashPassword } from "../../utils/helper";
import User from "./user.schema";
import { createUserSchema } from "./user.validation";

export const registerUser = async (createUserDTO) => {
  // Register user
  const validate = createUserSchema.safeParse(createUserDTO);
  if (!validate.success) {
    return {
      success: false,
      message: validate.error.errors,
    };
  }
  const userExist = await User.findOne({ email: createUserDTO.email });
  if (userExist) {
    return {
      success: false,
      message: "Email already exists",
    };
  }
  const userNameExist = await User.findOne({
    username: createUserDTO.username,
  });
  if (userNameExist) {
    const suggestedUserName = generateUsernameSuggestions(
      createUserDTO.username
    );
    return {
      success: false,
      message: "Username already taken",
      suggestions: suggestedUserName,
    };
  }
  // Save user to database
  const password = hashPassword(createUserDTO.password);
  const userDataToSave = {
    firstname: createUserDTO.firstname,
    lastname: createUserDTO.lastname,
    username: createUserDTO.username,
    email: createUserDTO.email,
    password,
  };
  const user = new User(userDataToSave);
  user.save();
  return {
    success: true,
    message: "User registered successfully",
  };
};
