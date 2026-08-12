import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: import("../users/entities/user.entity").UserRole;
            isActive: boolean;
            lastLogin: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
