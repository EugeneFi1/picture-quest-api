import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Quest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    // TO DO: add all Fields
}
