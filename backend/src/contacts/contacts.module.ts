import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Contact } from './entities/contact.entity';
import { ContactField } from './entities/contact-field.entity';
import { OfficeLocation } from './entities/office-location.entity';
import { TrustedClient } from './entities/trusted-client.entity';
import { JobPosition } from './entities/job-position.entity';
import { SocialLink } from './entities/social-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, ContactField, OfficeLocation, TrustedClient, JobPosition, SocialLink])],
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}