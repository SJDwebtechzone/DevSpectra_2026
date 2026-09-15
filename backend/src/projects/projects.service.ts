import { Injectable, NotFoundException, OnModuleInit, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService implements OnModuleInit {
  private readonly logger = new Logger(ProjectsService.name);

  constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) {}

  async onModuleInit() {
    try {
      await this.seedDefaultProjects();
    } catch (err: any) {
      this.logger.warn(`Deferred seeding projects: ${err.message}`);
    }
  }

  async seedDefaultProjects() {
    try {
      const defaults: Partial<Project>[] = [
        // Website
        {
          title: 'NSkill India',
          slug: 'nskill-india',
          category: 'Website',
          description: 'Ed Tech Platform.',
          shortDescription: 'From ideation to launch in 12 wks.',
          technologies: ['React', 'Next.js', 'PostgreSQL'],
          liveUrl: 'https://nskillindia.com',
          thumbnail: '/portfolio/website-1.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 1,
        },
        {
          title: 'Seatown',
          slug: 'seatown-website',
          category: 'Website',
          description: 'The magic of the sea.',
          shortDescription: 'Built with Next.js & Postgres.',
          technologies: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
          liveUrl: 'https://seatown.com',
          thumbnail: '/portfolio/website-2.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 2,
        },
        {
          title: 'Co-Tea',
          slug: 'co-tea',
          category: 'Website',
          description: 'Coffee meets tea.',
          shortDescription: 'Custom Shopify Plus storefront.',
          technologies: ['Shopify', 'Liquid', 'React'],
          liveUrl: 'https://co-tea.com',
          thumbnail: '/portfolio/website-3.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 3,
        },
        {
          title: 'Silicon Vista',
          slug: 'silicon-vista-website',
          category: 'Website',
          description: 'Learning Platform.',
          shortDescription: 'Over 10k active daily users.',
          technologies: ['React', 'Node.js', 'MongoDB'],
          liveUrl: 'https://siliconvista.com',
          thumbnail: '/portfolio/website-4.jpg',
          status: 'published',
          isOngoing: true,
          displayOrder: 4,
        },
        // Mobile
        {
          title: 'Veerify',
          slug: 'veerify-mobile',
          category: 'Mobile App',
          description: 'Mobile App for Instant Identity Verification.',
          shortDescription: 'Instant ID & Document Verification.',
          technologies: ['React Native', 'TypeScript', 'Node.js'],
          liveUrl: 'https://veerify.com',
          thumbnail: '/portfolio/mobile-1.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 5,
        },
        {
          title: 'Snapoo',
          slug: 'snapoo-mobile',
          category: 'Mobile App',
          description: 'Mobile Social Sharing App.',
          shortDescription: 'Social Media & Photo Sharing.',
          technologies: ['Flutter', 'Firebase', 'Dart'],
          liveUrl: 'https://snapoo.com',
          thumbnail: '/portfolio/mobile-2.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 6,
        },
        {
          title: 'Martial Art',
          slug: 'martial-art-mobile',
          category: 'Mobile App',
          description: 'Mobile Fitness & Martial Arts Training App.',
          shortDescription: 'Fitness & Martial Arts Coaching.',
          technologies: ['React Native', 'Redux', 'Express'],
          liveUrl: 'https://martialart.com',
          thumbnail: '/portfolio/mobile-3.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 7,
        },
        // E-Commerce
        {
          title: 'SM-Enterprises',
          slug: 'sm-enterprises',
          category: 'E-Commerce',
          description: 'E-Commerce Storefront & Order Management System.',
          shortDescription: 'B2B & B2C Wholesale E-Commerce.',
          technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
          liveUrl: 'https://smenterprises.com',
          thumbnail: '/portfolio/ecommerce-1.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 8,
        },
        {
          title: 'Cloth Buy',
          slug: 'cloth-buy',
          category: 'E-Commerce',
          description: 'Fashion E-Commerce Shopping Experience.',
          shortDescription: 'Modern Clothing & Apparel Store.',
          technologies: ['Shopify', 'React', 'TailwindCSS'],
          liveUrl: 'https://clothbuy.com',
          thumbnail: '/portfolio/ecommerce-2.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 9,
        },
        // UI/UX Design
        {
          title: 'Katalist Design',
          slug: 'katalist-uiux',
          category: 'UI/UX Design',
          description: 'UI/UX Design & Prototyping System.',
          shortDescription: 'Figma Design System & UI Kit.',
          technologies: ['Figma', 'Prototyping', 'User Research'],
          liveUrl: 'https://katalist.com',
          thumbnail: '/portfolio/uiux-1.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 10,
        },
        {
          title: 'Seatown Design',
          slug: 'seatown-uiux',
          category: 'UI/UX Design',
          description: 'Seatown Experience & Interface Design.',
          shortDescription: 'Seashore & Marine UI Design.',
          technologies: ['Figma', 'UI/UX', 'Wireframing'],
          liveUrl: 'https://seatown.com',
          thumbnail: '/portfolio/uiux-2.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 11,
        },
        {
          title: 'School Website Design',
          slug: 'school-website-uiux',
          category: 'UI/UX Design',
          description: 'Educational Institution UI/UX Layout.',
          shortDescription: 'Modern Academic Portal Design.',
          technologies: ['Figma', 'UI Design', 'User Journey'],
          liveUrl: 'https://schoolwebsite.com',
          thumbnail: '/portfolio/uiux-3.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 12,
        },
        {
          title: 'Silicon Vista Design',
          slug: 'silicon-vista-uiux',
          category: 'UI/UX Design',
          description: 'Learning Portal UI/UX Redesign.',
          shortDescription: 'Interactive Learning Dashboard UI.',
          technologies: ['Figma', 'Design System', 'Prototyping'],
          liveUrl: 'https://siliconvista.com',
          thumbnail: '/portfolio/uiux-4.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 13,
        },
        // Digital Marketing
        {
          title: 'SEO Growth Campaign',
          slug: 'seo-growth-campaign',
          category: 'Digital Marketing',
          description: 'Growth & Search Engine Optimization.',
          shortDescription: 'Organic Traffic & Keyword Strategy.',
          technologies: ['SEO', 'Google Analytics', 'Semrush'],
          liveUrl: 'https://seo-agency.com',
          thumbnail: '/portfolio/digital-1.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 14,
        },
        {
          title: 'Poster & Media Creative',
          slug: 'poster-making-campaign',
          category: 'Digital Marketing',
          description: 'LinkedIn, Instagram, Facebook Media Designs.',
          shortDescription: 'Social Media Creative Visuals.',
          technologies: ['Photoshop', 'Canva', 'Social Media'],
          liveUrl: 'https://postermaking.com',
          thumbnail: '/portfolio/digital-2.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 15,
        },
        {
          title: 'Reels & Short Video',
          slug: 'reels-studio-campaign',
          category: 'Digital Marketing',
          description: 'Instagram Reels & Short Video Strategy.',
          shortDescription: 'Viral Video Content Production.',
          technologies: ['Premiere Pro', 'CapCut', 'Reels'],
          liveUrl: 'https://reelsstudio.com',
          thumbnail: '/portfolio/digital-3.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 16,
        },
        {
          title: 'Content Distribution',
          slug: 'content-strategy-campaign',
          category: 'Digital Marketing',
          description: 'Brand Messaging & Content Distribution.',
          shortDescription: 'Multi-channel Copywriting & Distribution.',
          technologies: ['Copywriting', 'Content Marketing', 'HubSpot'],
          liveUrl: 'https://contentagency.com',
          thumbnail: '/portfolio/digital-4.jpg',
          status: 'published',
          isOngoing: false,
          displayOrder: 17,
        },
      ];

      for (const p of defaults) {
        const existing = await this.projectsRepository.findOne({
          where: [{ slug: p.slug }, { title: p.title }],
        });
        if (!existing) {
          await this.projectsRepository.save(this.projectsRepository.create(p));
        }
      }
      this.logger.log('Checked and seeded default portfolio projects');
    } catch (err: any) {
      this.logger.warn(`Could not seed default projects: ${err.message}`);
    }
  }

  create(createProjectDto: CreateProjectDto) {
    const project = this.projectsRepository.create(createProjectDto);
    return this.projectsRepository.save(project);
  }

  async findAll() {
    const count = await this.projectsRepository.count();
    if (count === 0) {
      await this.seedDefaultProjects();
    }
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