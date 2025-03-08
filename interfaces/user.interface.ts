type UserRole = 'admin' | 'superadmin' | 'regular';

export interface User {
    name: string;
    role: UserRole;
    id?: number;
}
