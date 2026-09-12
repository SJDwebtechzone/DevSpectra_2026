import { Injectable, NotFoundException, OnModuleInit, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactField } from './entities/contact-field.entity';
import { OfficeLocation } from './entities/office-location.entity';
import { TrustedClient } from './entities/trusted-client.entity';
import { JobPosition } from './entities/job-position.entity';
import { SocialLink } from './entities/social-link.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateContactFieldDto, UpdateContactFieldDto } from './dto/create-contact-field.dto';
import { CreateOfficeLocationDto, UpdateOfficeLocationDto } from './dto/office-location.dto';
import { CreateTrustedClientDto, UpdateTrustedClientDto } from './dto/trusted-client.dto';
import { CreateJobPositionDto, UpdateJobPositionDto } from './dto/job-position.dto';
import { CreateCareerApplicationDto } from './dto/career-application.dto';
import * as nodemailer from 'nodemailer';

const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

function isValidUuid(id: any): boolean {
  return typeof id === 'string' && UUID_REGEX.test(id);
}

@Injectable()
export class ContactsService implements OnModuleInit {
  private readonly logger = new Logger(ContactsService.name);

  constructor(
    @InjectRepository(ContactField) private fieldsRepository: Repository<ContactField>,
    @InjectRepository(OfficeLocation) private locationsRepository: Repository<OfficeLocation>,
    @InjectRepository(TrustedClient) private clientsRepository: Repository<TrustedClient>,
    @InjectRepository(JobPosition) private jobsRepository: Repository<JobPosition>,
    @InjectRepository(SocialLink) private socialLinksRepository: Repository<SocialLink>,
  ) {}

  async onModuleInit() {
    try {
      await this.seedDefaultFields();
      await this.seedDefaultLocations();
      await this.seedDefaultClients();
      await this.seedDefaultJobs();
      await this.seedDefaultSocialLinks();
    } catch (err: any) {
      this.logger.warn(`Initial database seeding deferred: ${err.message}`);
    }
  }

  async seedDefaultJobs() {
    try {
      const count = await this.jobsRepository.count();
      if (count > 0) return;

      const defaultJobs: Partial<JobPosition>[] = [
        { title: 'Marketing Expert', location: 'Remote - US/Canada', type: 'Full Time', order: 1, isActive: true },
        { title: 'Graphic Designer', location: 'Remote - UK/Italy', type: 'Full Time', order: 2, isActive: true },
        { title: 'Project Manager', location: 'Remote - Australia', type: 'Full Time', order: 3, isActive: true },
        { title: 'SEO Specialist', location: 'Remote - France', type: 'Full Time', order: 4, isActive: true },
        { title: 'Senior Developer', location: 'Remote - US/Canada', type: 'Full Time', order: 5, isActive: true },
        { title: 'UI Designer', location: 'Remote - Canada', type: 'Full Time', order: 6, isActive: true },
        { title: 'Digital Marketing Analyst', location: 'Remote - US/Canada', type: 'Full Time', order: 7, isActive: true },
        { title: 'UI/UX Designer', location: 'Remote - Canada', type: 'Full Time', order: 8, isActive: true },
        { title: 'Full Stack Developer', location: 'Remote - US/Canada', type: 'Full Time', order: 9, isActive: true },
      ];

      for (const j of defaultJobs) {
        await this.jobsRepository.save(this.jobsRepository.create(j));
      }
    } catch (err: any) {
      this.logger.warn(`Could not seed default jobs: ${err.message}`);
    }
  }

  async seedDefaultClients() {
    try {
      const count = await this.clientsRepository.count();
      if (count > 0) return;

      const defaultClients: Partial<TrustedClient>[] = [
        { name: 'Amazon Web Services', src: '/contact/amazonaws.svg', order: 1, isActive: true },
        { name: 'Apple', src: '/contact/apple.svg', order: 2, isActive: true },
        { name: 'Docker', src: '/contact/docker.svg', order: 3, isActive: true },
        { name: 'Google', src: '/contact/google.svg', order: 4, isActive: true },
        { name: 'GitHub', src: '/contact/github.svg', order: 5, isActive: true },
        { name: 'React', src: '/contact/react.svg', order: 6, isActive: true },
        { name: 'MongoDB', src: '/contact/mongodb.svg', order: 7, isActive: true },
        { name: 'TypeScript', src: '/contact/typescript.svg', order: 8, isActive: true },
      ];

      for (const c of defaultClients) {
        await this.clientsRepository.save(this.clientsRepository.create(c));
      }
    } catch (err: any) {
      this.logger.warn(`Could not seed default clients: ${err.message}`);
    }
  }

  async seedDefaultLocations() {
    try {
      const count = await this.locationsRepository.count();
      if (count > 0) return;

      const defaultLocations: Partial<OfficeLocation>[] = [
        {
          name: 'Chennai Headquarters',
          city: 'Chennai, Tamil Nadu',
          address: '18, 2nd St, Vani Nagar, Jai Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087',
          phone: '+0123-456-789',
          hours: 'Mon - Fri : 10:00 - 20:00 IST',
          status: 'Open Now',
          embedUrl: 'https://maps.google.com/maps?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087&t=&z=15&ie=UTF8&iwloc=&output=embed',
          directUrl: 'https://maps.google.com/?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087',
          isPrimary: true,
          order: 1,
        },
        {
          name: 'Kanchipuram Office',
          city: 'Kanchipuram, Tamil Nadu',
          address: 'Kanchipuram, Tamil Nadu 631501',
          phone: '+0123-456-789',
          hours: 'Mon - Sat : 09:30 - 19:30 IST',
          status: 'Open Now',
          embedUrl: 'https://maps.google.com/maps?q=Kanchipuram,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed',
          directUrl: 'https://maps.google.com/?q=Kanchipuram,+Tamil+Nadu',
          isPrimary: false,
          order: 2,
        },
      ];

      for (const loc of defaultLocations) {
        await this.locationsRepository.save(this.locationsRepository.create(loc));
      }
    } catch (err: any) {
      this.logger.warn(`Could not seed default locations: ${err.message}`);
    }
  }

  async seedDefaultFields() {
    try {
      const count = await this.fieldsRepository.count();
      if (count > 0) return;

      const defaults: Partial<ContactField>[] = [
        {
          label: 'First Name',
          name: 'firstName',
          type: 'text',
          placeholder: 'First Name *',
          isRequired: true,
          halfWidth: true,
          order: 1,
          isActive: true,
        },
        {
          label: 'Last Name',
          name: 'lastName',
          type: 'text',
          placeholder: 'Last Name *',
          isRequired: true,
          halfWidth: true,
          order: 2,
          isActive: true,
        },
        {
          label: 'Email',
          name: 'email',
          type: 'email',
          placeholder: 'Email *',
          isRequired: true,
          halfWidth: true,
          order: 3,
          isActive: true,
        },
        {
          label: 'Phone Number',
          name: 'phone',
          type: 'tel',
          placeholder: 'Phone Number *',
          isRequired: false,
          halfWidth: true,
          order: 4,
          isActive: true,
        },
        {
          label: 'Service Needed',
          name: 'service',
          type: 'select',
          placeholder: 'Service *',
          options: ['Website', 'Mobile App', 'E-Commerce', 'UI/UX Design', 'Digital Marketing', 'SaaS Product', 'Other'],
          isRequired: true,
          halfWidth: false,
          order: 5,
          isActive: true,
        },
        {
          label: 'Message',
          name: 'message',
          type: 'textarea',
          placeholder: 'Message *',
          isRequired: true,
          halfWidth: false,
          order: 6,
          isActive: true,
        },
      ];

      for (const f of defaults) {
        await this.fieldsRepository.save(this.fieldsRepository.create(f));
      }
    } catch (err: any) {
      this.logger.warn(`Could not seed default fields: ${err.message}`);
    }
  }

  // --- Field Management Methods ---

  async getFields(includeInactive = false) {
    if (includeInactive) {
      return this.fieldsRepository.find({ order: { order: 'ASC', createdAt: 'ASC' } });
    }
    return this.fieldsRepository.find({ where: { isActive: true }, order: { order: 'ASC', createdAt: 'ASC' } });
  }

  async createField(createDto: CreateContactFieldDto) {
    const count = await this.fieldsRepository.count();
    const payload: any = { ...createDto };
    if (payload.id && !isValidUuid(payload.id)) {
      delete payload.id;
    }
    const nameKey = payload.name || payload.label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    const field = this.fieldsRepository.create({
      ...payload,
      name: nameKey,
      order: payload.order || count + 1,
    });
    return this.fieldsRepository.save(field);
  }

  async updateField(id: string, updateDto: UpdateContactFieldDto) {
    if (!isValidUuid(id)) {
      throw new NotFoundException('Contact field not found');
    }
    const field = await this.fieldsRepository.findOne({ where: { id } });
    if (!field) throw new NotFoundException('Contact field not found');

    const payload: any = { ...updateDto };
    delete payload.id;
    Object.assign(field, payload);
    return this.fieldsRepository.save(field);
  }

  async deleteField(id: string) {
    if (!isValidUuid(id)) {
      return { id, deleted: true };
    }
    const field = await this.fieldsRepository.findOne({ where: { id } });
    if (!field) return { id, deleted: true };
    return this.fieldsRepository.remove(field);
  }

  // --- Send Email Directly to Client (No Admin Dashboard DB Storage) ---

  async sendContactEmail(createContactDto: CreateContactDto) {
    const { name, email, phone, service, subject, message, customData } = createContactDto;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'info@devspectra.com';

    // Format custom fields nicely for email
    let customFieldsHtml = '';
    if (customData && typeof customData === 'object') {
      const entries = Object.entries(customData).filter(
        ([k]) => !['name', 'email', 'phone', 'service', 'subject', 'message', 'firstName', 'lastName'].includes(k)
      );
      if (entries.length > 0) {
        customFieldsHtml = `
          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 14px; text-transform: uppercase;">Additional Form Details</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${entries
                .map(
                  ([k, v]) => `
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569; width: 40%; text-transform: capitalize;">${k.replace(/_/g, ' ')}:</td>
                  <td style="padding: 6px 0; color: #0f172a;">${String(v)}</td>
                </tr>`
                )
                .join('')}
            </table>
          </div>`;
      }
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #1e293b; font-size: 20px;">New Contact Form Inquiry</h2>
          <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">Received via website contact form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 30%;">Full Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 8px 0; color: #0f172a;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Needed:</td>
            <td style="padding: 8px 0; color: #0f172a;"><span style="background: #e0e7ff; color: #3730a3; padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">${service || subject || 'General Inquiry'}</span></td>
          </tr>
        </table>

        <div style="background: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
          <h4 style="margin: 0 0 8px 0; color: #334155; font-size: 13px; text-transform: uppercase;">Message Body</h4>
          <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'No message content.'}</p>
        </div>

        ${customFieldsHtml}

        <div style="margin-top: 30px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
          This message was sent directly from your DevSpectra Website Contact Form.
        </div>
      </div>`;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const cleanSmtpPass = process.env.SMTP_PASS.replace(/\s+/g, '');
        const smtpPort = Number(process.env.SMTP_PORT) || 587;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: cleanSmtpPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        await transporter.sendMail({
          from: `"Website Inquiry" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Inquiry: ${service || subject || 'Website Contact Form'} - ${name}`,
          html: htmlContent,
        });
        this.logger.log(`Contact inquiry email successfully sent to ${recipientEmail}`);
      } catch (err: any) {
        this.logger.error(`Failed to send contact inquiry email via SMTP: ${err.message}`);
      }
    } else {
      this.logger.log(`[Email Dispatch Simulation] Inquiry from ${name} (${email}) for service "${service}". Sent to ${recipientEmail}`);
    }

    return { message: 'Inquiry processed successfully', success: true };
  }

  async sendCareerApplicationEmail(createCareerDto: CreateCareerApplicationDto) {
    const { name, email, phone, role, message, fileName, fileBase64 } = createCareerDto;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'info@devspectra.com';

    const attachments: any[] = [];
    if (fileBase64 && fileName) {
      const base64Data = fileBase64.replace(/^data:.+;base64,/, '');
      attachments.push({
        filename: fileName,
        content: Buffer.from(base64Data, 'base64'),
      });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="border-bottom: 2px solid #8b5cf6; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #1e293b; font-size: 20px;">New Job Application Received</h2>
          <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">Submitted via DevSpectra Careers Portal</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 35%;">Applicant Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Mobile Number:</td>
            <td style="padding: 8px 0; color: #0f172a;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Applied Position:</td>
            <td style="padding: 8px 0; color: #0f172a;"><span style="background: #f3e8ff; color: #6b21a8; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">${role || 'General Application'}</span></td>
          </tr>
          ${
            fileName
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Attached Resume:</td>
            <td style="padding: 8px 0; color: #059669; font-weight: 600;">📎 ${fileName} (Attached)</td>
          </tr>`
              : ''
          }
        </table>

        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin-bottom: 20px;">
          <h4 style="margin: 0 0 8px 0; color: #334155; font-size: 13px; text-transform: uppercase;">Cover Letter / Message</h4>
          <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
          Sent directly to your email from DevSpectra Careers Portal.
        </div>
      </div>`;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const cleanSmtpPass = process.env.SMTP_PASS.replace(/\s+/g, '');
        const smtpPort = Number(process.env.SMTP_PORT) || 587;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: cleanSmtpPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        await transporter.sendMail({
          from: `"DevSpectra Job Application" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Job Application: ${role} - ${name}`,
          html: htmlContent,
          attachments,
        });
        this.logger.log(`Career application email successfully sent to ${recipientEmail}`);
      } catch (err: any) {
        this.logger.error(`Failed to send career application email via SMTP: ${err.message}`);
      }
    } else {
      this.logger.log(`[Email Dispatch Simulation] Career application from ${name} (${email}) for role "${role}". Sent to ${recipientEmail}`);
    }

    return { message: 'Application processed successfully', success: true };

  }

  async create(createContactDto: CreateContactDto) {
    return this.sendContactEmail(createContactDto);
  }

  findAll() {
    return [];
  }

  async findOne(id: string) {
    throw new NotFoundException('Inquiry submissions are sent directly to email');
  }

  async markAsRead(id: string) {
    throw new NotFoundException('Inquiry submissions are sent directly to email');
  }

  async remove(id: string) {
    return { success: true };
  }

  // --- Office Location Management Methods ---

  async getLocations() {
    return this.locationsRepository.find({
      order: { isPrimary: 'DESC', order: 'ASC', createdAt: 'ASC' },
    });
  }

  async createLocation(createDto: CreateOfficeLocationDto) {
    const count = await this.locationsRepository.count();
    if (createDto.isPrimary) {
      await this.locationsRepository.update({ isPrimary: true }, { isPrimary: false });
    }
    const payload: any = { ...createDto };
    if (payload.id && !isValidUuid(payload.id)) {
      delete payload.id;
    }
    const location = this.locationsRepository.create({
      ...payload,
      order: payload.order || count + 1,
    });
    return this.locationsRepository.save(location);
  }

  async updateLocation(id: string, updateDto: UpdateOfficeLocationDto) {
    if (!isValidUuid(id)) {
      throw new NotFoundException('Office location not found');
    }
    const location = await this.locationsRepository.findOne({ where: { id } });
    if (!location) throw new NotFoundException('Office location not found');

    if (updateDto.isPrimary) {
      await this.locationsRepository.update({ isPrimary: true }, { isPrimary: false });
    }

    const payload: any = { ...updateDto };
    delete payload.id;
    Object.assign(location, payload);
    return this.locationsRepository.save(location);
  }

  async deleteLocation(id: string) {
    if (!isValidUuid(id)) {
      return { id, deleted: true };
    }
    const location = await this.locationsRepository.findOne({ where: { id } });
    if (!location) return { id, deleted: true };
    return this.locationsRepository.remove(location);
  }

  // --- Trusted Clients Management Methods ---

  async getClients(includeInactive = false) {
    if (includeInactive) {
      return this.clientsRepository.find({ order: { order: 'ASC', createdAt: 'ASC' } });
    }
    return this.clientsRepository.find({ where: { isActive: true }, order: { order: 'ASC', createdAt: 'ASC' } });
  }

  async createClient(createDto: CreateTrustedClientDto) {
    const count = await this.clientsRepository.count();
    const payload: any = { ...createDto };
    if (payload.id && !isValidUuid(payload.id)) {
      delete payload.id;
    }
    const client = this.clientsRepository.create({
      ...payload,
      order: payload.order || count + 1,
    });
    return this.clientsRepository.save(client);
  }

  async updateClient(id: string, updateDto: UpdateTrustedClientDto) {
    if (!isValidUuid(id)) {
      throw new NotFoundException('Trusted client not found');
    }
    const client = await this.clientsRepository.findOne({ where: { id } });
    if (!client) throw new NotFoundException('Trusted client not found');

    const payload: any = { ...updateDto };
    delete payload.id;
    Object.assign(client, payload);
    return this.clientsRepository.save(client);
  }

  async deleteClient(id: string) {
    if (!isValidUuid(id)) {
      return { id, deleted: true };
    }
    const client = await this.clientsRepository.findOne({ where: { id } });
    if (!client) return { id, deleted: true };
    return this.clientsRepository.remove(client);
  }

  // --- Job Positions Management Methods ---

  async getJobs(includeInactive = false) {
    if (includeInactive) {
      return this.jobsRepository.find({ order: { order: 'ASC', createdAt: 'ASC' } });
    }
    return this.jobsRepository.find({ where: { isActive: true }, order: { order: 'ASC', createdAt: 'ASC' } });
  }

  async createJob(createDto: CreateJobPositionDto) {
    const count = await this.jobsRepository.count();
    const payload: any = { ...createDto };
    if (payload.id && !isValidUuid(payload.id)) {
      delete payload.id;
    }
    const job = this.jobsRepository.create({
      ...payload,
      order: payload.order || count + 1,
    });
    return this.jobsRepository.save(job);
  }

  async updateJob(id: string, updateDto: UpdateJobPositionDto) {
    if (!isValidUuid(id)) {
      throw new NotFoundException('Job position not found');
    }
    const job = await this.jobsRepository.findOne({ where: { id } });
    if (!job) throw new NotFoundException('Job position not found');

    const payload: any = { ...updateDto };
    delete payload.id;
    Object.assign(job, payload);
    return this.jobsRepository.save(job);
  }

  async deleteJob(id: string) {
    if (!isValidUuid(id)) {
      return { id, deleted: true };
    }
    const job = await this.jobsRepository.findOne({ where: { id } });
    if (!job) return { id, deleted: true };
    return this.jobsRepository.remove(job);
  }

  // --- Social Links Management Methods ---

  async seedDefaultSocialLinks() {
    try {
      const count = await this.socialLinksRepository.count();
      if (count > 0) return;

      const defaultLinks: Partial<SocialLink>[] = [
        { platform: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/', order: 1, isActive: true },
        { platform: 'X (Twitter)', icon: 'twitter', url: 'https://x.com/', order: 2, isActive: true },
        { platform: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/', order: 3, isActive: true },
        { platform: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/', order: 4, isActive: true },
        { platform: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/', order: 5, isActive: true },
      ];

      for (const link of defaultLinks) {
        await this.socialLinksRepository.save(this.socialLinksRepository.create(link));
      }
    } catch (err: any) {
      this.logger.warn(`Could not seed default social links: ${err.message}`);
    }
  }

  async getSocialLinks(includeInactive = false) {
    if (includeInactive) {
      return this.socialLinksRepository.find({ order: { order: 'ASC', createdAt: 'ASC' } });
    }
    return this.socialLinksRepository.find({ where: { isActive: true }, order: { order: 'ASC', createdAt: 'ASC' } });
  }

  async createSocialLink(data: Partial<SocialLink>) {
    const count = await this.socialLinksRepository.count();
    const payload: any = { ...data };
    if (payload.id && !isValidUuid(payload.id)) {
      delete payload.id;
    }
    const link = this.socialLinksRepository.create({
      ...payload,
      order: payload.order || count + 1,
    });
    return this.socialLinksRepository.save(link);
  }

  async updateSocialLink(id: string, data: Partial<SocialLink>) {
    if (!isValidUuid(id)) {
      throw new NotFoundException('Social link not found');
    }
    const link = await this.socialLinksRepository.findOne({ where: { id } });
    if (!link) throw new NotFoundException('Social link not found');

    const payload: any = { ...data };
    delete payload.id;
    Object.assign(link, data);
    return this.socialLinksRepository.save(link);
  }

  async deleteSocialLink(id: string) {
    if (!isValidUuid(id)) {
      return { id, deleted: true };
    }
    const link = await this.socialLinksRepository.findOne({ where: { id } });
    if (!link) return { id, deleted: true };
    return this.socialLinksRepository.remove(link);
  }

  async bulkUpdateSocialLinks(links: Partial<SocialLink>[]) {
    const saved: SocialLink[] = [];
    for (const item of links) {
      if (item.id && isValidUuid(item.id)) {
        const existing = await this.socialLinksRepository.findOne({ where: { id: item.id } });
        if (existing) {
          const payload: any = { ...item };
          delete payload.id;
          Object.assign(existing, payload);
          const res = await this.socialLinksRepository.save(existing);
          saved.push(res as SocialLink);
          continue;
        }
      }
      const newItem: any = { ...item };
      delete newItem.id;
      const newLink = this.socialLinksRepository.create(newItem);
      const res = await this.socialLinksRepository.save(newLink as any);
      saved.push(Array.isArray(res) ? res[0] : (res as SocialLink));
    }
    return saved;
  }
}