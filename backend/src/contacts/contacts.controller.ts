import { Controller, Get, Post, Put, Query, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateContactFieldDto, UpdateContactFieldDto } from './dto/create-contact-field.dto';
import { CreateOfficeLocationDto, UpdateOfficeLocationDto } from './dto/office-location.dto';
import { CreateTrustedClientDto, UpdateTrustedClientDto } from './dto/trusted-client.dto';
import { CreateJobPositionDto, UpdateJobPositionDto } from './dto/job-position.dto';
import { CreateCareerApplicationDto } from './dto/career-application.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // --- Dynamic Job Positions Endpoints ---

  @Get('jobs')
  getJobs() {
    return this.contactsService.getJobs(false);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Get('jobs/admin')
  getAdminJobs() {
    return this.contactsService.getJobs(true);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Post('jobs')
  createJob(@Body() createDto: CreateJobPositionDto) {
    return this.contactsService.createJob(createDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch('jobs/:id')
  updateJob(@Param('id') id: string, @Body() updateDto: UpdateJobPositionDto) {
    return this.contactsService.updateJob(id, updateDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete('jobs/:id')
  deleteJob(@Param('id') id: string) {
    return this.contactsService.deleteJob(id);
  }

  // --- Dynamic Trusted Clients Endpoints ---

  @Get('clients')
  getClients() {
    return this.contactsService.getClients(false);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Get('clients/admin')
  getAdminClients() {
    return this.contactsService.getClients(true);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Post('clients')
  createClient(@Body() createDto: CreateTrustedClientDto) {
    return this.contactsService.createClient(createDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch('clients/:id')
  updateClient(@Param('id') id: string, @Body() updateDto: UpdateTrustedClientDto) {
    return this.contactsService.updateClient(id, updateDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete('clients/:id')
  deleteClient(@Param('id') id: string) {
    return this.contactsService.deleteClient(id);
  }

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

  @Post('career-apply')
  createCareerApplication(@Body() createCareerDto: CreateCareerApplicationDto) {
    return this.contactsService.sendCareerApplicationEmail(createCareerDto);
  }

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

  // --- Social Links Endpoints ---

  @Get('social-links')
  getSocialLinks(@Query('all') all?: string) {
    return this.contactsService.getSocialLinks(all === 'true');
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Post('social-links')
  createSocialLink(@Body() body: any) {
    return this.contactsService.createSocialLink(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Put('social-links/bulk')
  bulkUpdateSocialLinks(@Body() body: any[]) {
    return this.contactsService.bulkUpdateSocialLinks(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch('social-links/:id')
  updateSocialLink(@Param('id') id: string, @Body() body: any) {
    return this.contactsService.updateSocialLink(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete('social-links/:id')
  deleteSocialLink(@Param('id') id: string) {
    return this.contactsService.deleteSocialLink(id);
  }
}