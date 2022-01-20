import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }


  findAll() {
    return `This action returns a user`;
  }


  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

}
