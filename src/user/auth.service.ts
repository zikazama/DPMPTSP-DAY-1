import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async register(registerDto: RegisterDto) {
    return this.userService.create(registerDto);
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id, role: 'admin' };
    return {
      access_token: this.jwtService.sign(payload, {secret: 'rahasia'}),
    };
  }
}
