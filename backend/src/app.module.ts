import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactsModule } from './contacts/contacts.module';
import { User } from './users/entities/user.entity';
import { Project } from './projects/entities/project.entity';
import { Contact } from './contacts/entities/contact.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/entities/review.entity';
import { GoogleReviewsModule } from './google-reviews/google-reviews.module';
import { GoogleReview } from './google-reviews/entities/google-review.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [User, Project, Contact, Review, GoogleReview],
        synchronize: false, // Ensure synchronize is false for production
        migrationsRun: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    DashboardModule,
    ProjectsModule,
    ContactsModule,
    GoogleReviewsModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
