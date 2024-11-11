import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}