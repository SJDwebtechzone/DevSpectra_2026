const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

const files = {
  'users/users.module.ts': `import { Module, OnApplicationBootstrap } from '@nestjs/common';
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
    const adminEmail = 'admin@portfolio.com';
    const existingAdmin = await this.usersService.findByEmail(adminEmail);
    if (!existingAdmin) {
      await this.usersService.create({
        name: 'Super Admin',
        email: adminEmail,
        password: 'Admin@123',
      }, UserRole.SUPER_ADMIN);
      console.log('Initial Super Admin seeded successfully.');
    }
  }
}`,

  'auth/auth.module.ts': `import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}`,

  'projects/projects.module.ts': `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}`,

  'contacts/contacts.module.ts': `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}`,

  'dashboard/dashboard.module.ts': `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Project } from '../projects/entities/project.entity';
import { Contact } from '../contacts/entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Contact])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}
console.log('Modules generated successfully.');
