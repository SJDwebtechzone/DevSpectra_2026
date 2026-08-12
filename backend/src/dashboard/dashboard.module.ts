import { Module } from '@nestjs/common';
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
export class DashboardModule {}