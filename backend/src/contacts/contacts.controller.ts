import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateContactFieldDto, UpdateContactFieldDto } from './dto/create-contact-field.dto';
import { CreateOfficeLocationDto, UpdateOfficeLocationDto } from './dto/office-location.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // --- Dynamic Office Locations Endpoints ---

  @Get('locations')
  getLocations() {
    return this.contactsService.getLocations();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Post('locations')
  createLocation(@Body() createDto: CreateOfficeLocationDto) {
    return this.contactsService.createLocation(createDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch('locations/:id')
  updateLocation(@Param('id') id: string, @Body() updateDto: UpdateOfficeLocationDto) {
    return this.contactsService.updateLocation(id, updateDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete('locations/:id')
  deleteLocation(@Param('id') id: string) {
    return this.contactsService.deleteLocation(id);
  }

  // --- Dynamic Form Fields Endpoints ---

  @Get('fields')
  getFields() {
    return this.contactsService.getFields(false);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Get('fields/admin')
  getAdminFields() {
    return this.contactsService.getFields(true);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Post('fields')
  createField(@Body() createDto: CreateContactFieldDto) {
    return this.contactsService.createField(createDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch('fields/:id')
  updateField(@Param('id') id: string, @Body() updateDto: UpdateContactFieldDto) {
    return this.contactsService.updateField(id, updateDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete('fields/:id')
  deleteField(@Param('id') id: string) {
    return this.contactsService.deleteField(id);
  }

  // --- Submission Endpoints ---

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.contactsService.markAsRead(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}