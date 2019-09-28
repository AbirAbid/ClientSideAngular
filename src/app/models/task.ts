import { Role } from './role';
import { User } from './user';

export class Task {
    id: number;
    title:string;
    description: string ;
    comment :string ;
	startDate: string ;
	endDate: string ;
	etat: string ;
    usermanger: User;
    affected: boolean;
    username: string;
}