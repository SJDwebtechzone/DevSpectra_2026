import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(@InjectRepository(Contact) private contactsRepository: Repository<Contact>) {}

  create(createContactDto: CreateContactDto) {
    const contact = this.contactsRepository.create(createContactDto);
    return this.contactsRepository.save(contact);
  }

  findAll() {
    return this.contactsRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const contact = await this.contactsRepository.findOne({ where: { id } });
    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }

  async markAsRead(id: string) {
    await this.findOne(id);
    await this.contactsRepository.update(id, { isRead: true });
    return this.findOne(id);
  }

  async remove(id: string) {
    const contact = await this.findOne(id);
    return this.contactsRepository.remove(contact);
  }
}