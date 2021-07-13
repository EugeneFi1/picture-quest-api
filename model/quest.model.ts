import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Quest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    picture: string;

    @Column()
    explanation: string;

    @Column()
    replyStrategy: string;

    @Column()
    userName: string;

    @Column()
    showStrategy: number;

}
