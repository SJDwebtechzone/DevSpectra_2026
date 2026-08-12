export declare class CreateProjectDto {
    title: string;
    slug: string;
    description: string;
    shortDescription?: string;
    category: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    thumbnail?: string;
    images?: string[];
    featured?: boolean;
    displayOrder?: number;
    status?: string;
}
