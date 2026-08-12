import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../projects/entities/project.entity';
import { Contact } from '../contacts/entities/contact.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Project) private projectsRepository: Repository<Project>,
    @InjectRepository(Contact) private contactsRepository: Repository<Contact>,
  ) {}

  async getDashboardStats() {
    const [
      totalProjects,
      totalContacts,
      unreadContacts,
      featuredProjects,
      latestProjects,
      latestContacts,
    ] = await Promise.all([
      this.projectsRepository.count(),
      this.contactsRepository.count(),
      this.contactsRepository.count({ where: { isRead: false } }),
      this.projectsRepository.find({ where: { featured: true }, take: 5 }),
      this.projectsRepository.find({ order: { createdAt: 'DESC' }, take: 5 }),
      this.contactsRepository.find({ order: { createdAt: 'DESC' }, take: 5 }),
    ]);

    return {
      totalProjects,
      totalContacts,
      unreadContacts,
      featuredProjects,
      latestProjects,
      latestContacts,
    };
  }
}