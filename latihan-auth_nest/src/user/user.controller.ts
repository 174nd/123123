import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private jwtService: JwtService) {}



  @Get('user')
  async user(@Req() request: Request) {
      try {
          const cookie = request.cookies['jwt'];

          const data = await this.jwtService.verifyAsync(cookie);

          if (!data) {
              throw new UnauthorizedException();
          }

          const user = await this.userService.findOne({id: data['id']});

          const {password, ...result} = user;

          return result;
      } catch (e) {
          throw new UnauthorizedException();
      }
  }

  
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
