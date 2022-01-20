import { UserService } from './user.service';
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    user(request: Request): Promise<{
        id: number;
        name: string;
        email: string;
        reset_link: string;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
}
