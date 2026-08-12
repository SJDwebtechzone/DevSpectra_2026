import { OnApplicationBootstrap } from '@nestjs/common';
import { UsersService } from './users.service';
export declare class UsersModule implements OnApplicationBootstrap {
    private usersService;
    constructor(usersService: UsersService);
    onApplicationBootstrap(): Promise<void>;
}
