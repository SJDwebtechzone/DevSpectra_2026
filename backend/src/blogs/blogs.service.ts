import { Injectable, NotFoundException, OnModuleInit, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService implements OnModuleInit {
  private readonly logger = new Logger(BlogsService.name);

  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  async onModuleInit() {
    try {
      await this.seedDefaultBlogs();
    } catch (err: any) {
      this.logger.warn(`Initial blogs database seeding deferred: ${err.message}`);
    }
  }

  async seedDefaultBlogs() {
    try {
      const count = await this.blogsRepository.count();
      if (count > 0) return;

      const defaultBlogs: Partial<Blog>[] = [
        {
          title: 'Things to Look for When Comparing Branding Alternatives',
          slug: 'things-to-look-for-when-comparing-branding-alternatives',
          excerpt: 'Discover key elements when comparing branding strategy alternatives for your agency or digital product.',
          content: 'Building a cohesive visual identity requires evaluating design systems, brand guidelines, and positioning. Learn how to compare branding alternatives effectively.',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
          category: 'BRANDING',
          tags: ['BRANDING', 'DESIGN'],
          author: 'DevSpectra Design Team',
          readTime: '4 min read',
          isFeatured: true,
          isActive: true,
          order: 1,
        },
        {
          title: '5 Stand-out Features of Branding You Should Know',
          slug: '5-stand-out-features-of-branding-you-should-know',
          excerpt: 'Explore the 5 standalone branding features that elevate digital products from ordinary to iconic.',
          content: 'Consistency, emotional resonance, visual typography, tone of voice, and interactive motion form the core pillars of iconic brand design.',
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
          category: 'BRANDING',
          tags: ['BRANDING', 'DESIGN'],
          author: 'DevSpectra Design Team',
          readTime: '5 min read',
          isFeatured: true,
          isActive: true,
          order: 2,
        },
        {
          title: 'Branding: What Real Customers Have To Say',
          slug: 'branding-what-real-customers-have-to-say',
          excerpt: 'Real feedback and case insights from customers on how branding influences trust and engagement.',
          content: 'User feedback demonstrates that clear design hierarchy and modern aesthetics significantly boost user trust and retention.',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
          category: 'BRANDING',
          tags: ['BRANDING', 'DESIGN'],
          author: 'DevSpectra Research',
          readTime: '3 min read',
          isFeatured: false,
          isActive: true,
          order: 3,
        },
        {
          title: "Branding: Pros and Cons They Don't Tell You",
          slug: 'branding-pros-and-cons-they-dont-tell-you',
          excerpt: 'An honest look into the investment, timeline, and trade-offs when executing a full brand refresh.',
          content: 'While rebranding drives growth, it requires strategic alignment, asset audits, and careful migration of existing customer equity.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
          category: 'BRANDING',
          tags: ['BRANDING', 'DESIGN'],
          author: 'DevSpectra Strategy',
          readTime: '6 min read',
          isFeatured: false,
          isActive: true,
          order: 4,
        },
        {
          title: 'How to Spot the Best Branding for You: Signs and Features',
          slug: 'how-to-spot-the-best-branding-for-you-signs-and-features',
          excerpt: 'Practical guidelines to help founders and engineering teams select appropriate brand systems.',
          content: 'Identify brand assets that scale across web apps, mobile interfaces, and digital marketing collaterals.',
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
          category: 'DESIGN',
          tags: ['DESIGN', 'BRANDING'],
          author: 'DevSpectra Design Team',
          readTime: '4 min read',
          isFeatured: false,
          isActive: true,
          order: 5,
        },
        {
          title: 'How Much Should I Spend on Branding?',
          slug: 'how-much-should-i-spend-on-branding',
          excerpt: 'Budgeting considerations for early stage startups versus scaling digital enterprises.',
          content: 'Understand cost breakdowns across discovery, logo design, design system tokenization, and web guidelines.',
          image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
          category: 'DESIGN',
          tags: ['DESIGN', 'BUSINESS'],
          author: 'DevSpectra Leadership',
          readTime: '5 min read',
          isFeatured: false,
          isActive: true,
          order: 6,
        },
        {
          title: "Rookie Mistakes You're Making With Your Branding",
          slug: 'rookie-mistakes-youre-making-with-your-branding',
          excerpt: 'Avoid common pitfalls like inconsistent color palettes, missing responsive assets, or poor contrast.',
          content: 'Avoid over-complicating logomarks, ignoring accessibility guidelines, and skipping dark mode UI tokens.',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
          category: 'DESIGN',
          tags: ['DESIGN', 'UI/UX'],
          author: 'DevSpectra Design Team',
          readTime: '4 min read',
          isFeatured: false,
          isActive: true,
          order: 7,
        },
        {
          title: 'Real Branding Customer Reviews You Need to See',
          slug: 'real-branding-customer-reviews-you-need-to-see',
          excerpt: 'Insights and client stories from recent identity redesign projects across web and mobile platforms.',
          content: 'Explore how targeted design modernizations helped partner platforms double user onboarding conversion rates.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
          category: 'BRANDING',
          tags: ['BRANDING', 'CASE STUDY'],
          author: 'DevSpectra Team',
          readTime: '5 min read',
          isFeatured: false,
          isActive: true,
          order: 8,
        },
      ];

      for (const b of defaultBlogs) {
        await this.blogsRepository.save(this.blogsRepository.create(b));
      }
      this.logger.log('Seeded default blog posts successfully.');
    } catch (err: any) {
      this.logger.warn(`Could not seed default blogs: ${err.message}`);
    }
  }

  async findAll(includeInactive = false, category?: string) {
    const query = this.blogsRepository.createQueryBuilder('blog');
    if (!includeInactive) {
      query.where('blog.isActive = :isActive', { isActive: true });
    }
    if (category && category.toUpperCase() !== 'ALL') {
      query.andWhere('LOWER(blog.category) = LOWER(:category)', { category });
    }
    query.orderBy('blog.order', 'ASC').addOrderBy('blog.createdAt', 'DESC');
    return query.getMany();
  }

  async findOne(idOrSlug: string) {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrSlug);
    let blog: Blog | null = null;
    if (isUuid) {
      blog = await this.blogsRepository.findOne({ where: { id: idOrSlug } });
    }
    if (!blog) {
      blog = await this.blogsRepository.findOne({ where: { slug: idOrSlug } });
    }
    if (!blog) throw new NotFoundException('Blog post not found');
    return blog;
  }

  async create(createDto: CreateBlogDto) {
    const count = await this.blogsRepository.count();
    const slug = createDto.slug || createDto.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tags = Array.isArray(createDto.tags)
      ? createDto.tags
      : typeof createDto.tags === 'string'
      ? (createDto.tags as string).split(',').map((t) => t.trim()).filter(Boolean)
      : [createDto.category || 'BRANDING'];

    const blog = this.blogsRepository.create({
      ...createDto,
      slug,
      tags,
      order: createDto.order || count + 1,
    });
    return this.blogsRepository.save(blog);
  }

  async update(id: string, updateDto: UpdateBlogDto) {
    const blog = await this.blogsRepository.findOne({ where: { id } });
    if (!blog) throw new NotFoundException('Blog post not found');

    if (updateDto.title && !updateDto.slug) {
      updateDto.slug = updateDto.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    if (updateDto.tags && typeof updateDto.tags === 'string') {
      updateDto.tags = (updateDto.tags as string).split(',').map((t) => t.trim()).filter(Boolean);
    }

    Object.assign(blog, updateDto);
    return this.blogsRepository.save(blog);
  }

  async remove(id: string) {
    const blog = await this.blogsRepository.findOne({ where: { id } });
    if (!blog) throw new NotFoundException('Blog post not found');
    return this.blogsRepository.remove(blog);
  }
}
