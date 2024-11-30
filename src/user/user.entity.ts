import { Feedback } from "src/feedback/feedback.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
dob: string;

@Column()
username: string;

@Column()
email: string;

@Column()
phone_number: number;

@Column({default: ''})
password: string;


@OneToMany(()=>Feedback,(feedback : Feedback)=> {feedback.user} )
feedback: Feedback[];
}
