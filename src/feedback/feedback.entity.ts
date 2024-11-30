import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    message: string;

    @ManyToOne(()=> User, (user)=>user.feedback)
    user: User;
}