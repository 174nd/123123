import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports :[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: 'secret',
        signOptions: {expiresIn: '1d'}
    })
  ]
})
export class AuthModule {}
