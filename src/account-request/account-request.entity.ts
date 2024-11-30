import { Feedback } from "src/feedback/feedback.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AccountRequest{
@PrimaryGeneratedColumn()
id: number;

@Column()
request: 'Account-Deletion' | 'Password-Reset';

@Column({default: false})
fulfilled: boolean;

@ManyToOne(()=>User , (user: User )=> {user.account_requests} )
user: User;
}
