import { Repository } from 'typeorm';
import { Project } from '../projects/entities/project.entity';
import { Contact } from '../contacts/entities/contact.entity';
export declare class DashboardService {
    private projectsRepository;
    private contactsRepository;
    constructor(projectsRepository: Repository<Project>, contactsRepository: Repository<Contact>);
    getDashboardStats(): Promise<{
        totalProjects: number;
        totalContacts: number;
        unreadContacts: number;
        featuredProjects: Project[];
        latestProjects: Project[];
        latestContacts: Contact[];
    }>;
}
