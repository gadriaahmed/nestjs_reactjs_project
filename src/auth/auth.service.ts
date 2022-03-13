import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { genSalt, hash,compareSync } from 'bcrypt';
import { IUser } from '../users/entities/Iuser.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(public userService:UsersService,public jwtService:JwtService) {
  }

  async register(user:User){
    return await this.userService.saveUser({
      ...user,
      password : await encrypt(user.password)
    })
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user: User = await this.userService.findOne({
      where: { username },
    });

    if (user && compareSync(password, user.password)) {
      const { password, ...result } = user;

      // @ts-ignore
      return result as User;
    }

    return null;
  }

  loginWithCredentials(user: IUser) {
    return {
      access_token: this.generateToken(user),
    };
  }

  private generateToken(user: IUser): string {
    return this.jwtService.sign(
      {
        userId: user.id,
        username: user.username,

        firstName: user.firstName,
        lastName: user.lastName,
      }
    );
  }
}

export async function encrypt(x: string): Promise<string> {
  const salt = await genSalt(10);
  return hash(x, salt);
}