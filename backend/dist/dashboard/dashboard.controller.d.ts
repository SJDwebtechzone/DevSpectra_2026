import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(): Promise<{
        totalProjects: number;
        totalContacts: number;
        unreadContacts: number;
        featuredProjects: import("../projects/entities/project.entity").Project[];
        latestProjects: import("../projects/entities/project.entity").Project[];
        latestContacts: import("../contacts/entities/contact.entity").Contact[];
    }>;
}
