import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(user: any): any;
}
