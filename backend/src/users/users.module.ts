import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User, UserRole } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements OnApplicationBootstrap {
  constructor(private usersService: UsersService) {}

  async onApplicationBootstrap() {
    // Seed initial Super Admin if it doesn't exist
    const adminEmail = 'admin@devspectra.com';
    const existingAdmin = await this.usersService.findByEmail(adminEmail);
    if (!existingAdmin) {
      await this.usersService.create({
        name: 'Super Admin',
        email: adminEmail,
        password: 'Devspectra@123',
      }, UserRole.SUPER_ADMIN);
      console.log('Initial Super Admin seeded successfully.');
    }
  }
}