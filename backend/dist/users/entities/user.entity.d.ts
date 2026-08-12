export declare enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN"
}
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    isActive: boolean;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
}
