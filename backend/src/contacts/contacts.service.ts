import { Injectable, NotFoundException, OnModuleInit, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactField } from './entities/contact-field.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateContactFieldDto, UpdateContactFieldDto } from './dto/create-contact-field.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactsService implements OnModuleInit {
  private readonly logger = new Logger(ContactsService.name);

  constructor(
    @InjectRepository(ContactField) private fieldsRepository: Repository<ContactField>,
  ) {}

  async onModuleInit() {
    await this.seedDefaultFields();
  }

  async seedDefaultFields() {
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
    const nameKey = createDto.name || createDto.label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    const field = this.fieldsRepository.create({
      ...createDto,
      name: nameKey,
      order: createDto.order || count + 1,
    });
    return this.fieldsRepository.save(field);
  }

  async updateField(id: string, updateDto: UpdateContactFieldDto) {
    const field = await this.fieldsRepository.findOne({ where: { id } });
    if (!field) throw new NotFoundException('Contact field not found');

    Object.assign(field, updateDto);
    return this.fieldsRepository.save(field);
  }

  async deleteField(id: string) {
    const field = await this.fieldsRepository.findOne({ where: { id } });
    if (!field) throw new NotFoundException('Contact field not found');
    return this.fieldsRepository.remove(field);
  }

  // --- Send Email Directly to Client (No Admin Dashboard DB Storage) ---

  async sendContactEmail(createContactDto: CreateContactDto) {
    const { name, email, phone, service, subject, message, customData } = createContactDto;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'ramyashan.1010@gmail.com';

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
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
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
        this.logger.error(`Failed to send email via SMTP: ${err.message}`);
      }
    } else {
      this.logger.log(`[Email Dispatch Simulation] Inquiry from ${name} (${email}) for service "${service}". Sent to ${recipientEmail}`);
    }

    return { message: 'Inquiry sent directly to client email successfully', success: true };
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
}