import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Contact } from './entities/contact.entity';
import { ContactField } from './entities/contact-field.entity';
import { OfficeLocation } from './entities/office-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, ContactField, OfficeLocation])],
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}