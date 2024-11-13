import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column({type: 'text'})
    message: string;
}