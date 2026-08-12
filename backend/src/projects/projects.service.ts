import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) {}

  create(createProjectDto: CreateProjectDto) {
    const project = this.projectsRepository.create(createProjectDto);
    return this.projectsRepository.save(project);
  }

  findAll() {
    return this.projectsRepository.find({ order: { displayOrder: 'ASC', createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const project = await this.projectsRepository.findOne({ where: { id } });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async update(id: string, updateProjectDto: Partial<CreateProjectDto>) {
    await this.findOne(id);
    await this.projectsRepository.update(id, updateProjectDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    return this.projectsRepository.remove(project);
  }
}