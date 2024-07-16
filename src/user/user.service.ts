import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(registerDto: RegisterDto): Promise<User> {
    const user = new User();
    user.username = registerDto.username;
    user.password = registerDto.password; // Ideally, you should hash the password before saving
    user.role = 'user'; // Default role
    return this.userRepository.save(user);
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username, password } });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
