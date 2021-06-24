import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        user: user.email,
      },
      "f42949bec3c066fc4ed7a76f3e9de8aa",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
export { AuthenticateUserService };
