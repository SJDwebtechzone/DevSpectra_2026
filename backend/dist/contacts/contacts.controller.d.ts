import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto): Promise<import("./entities/contact.entity").Contact>;
    findAll(): Promise<import("./entities/contact.entity").Contact[]>;
    findOne(id: string): Promise<import("./entities/contact.entity").Contact>;
    markAsRead(id: string): Promise<import("./entities/contact.entity").Contact>;
    remove(id: string): Promise<import("./entities/contact.entity").Contact>;
}
