import "reflect-metadata";
import {Quest} from "../model/quest.model";
import {ConnectionOptions, createConnection} from "typeorm";

export const connectionOptions: ConnectionOptions = {
    type: "sqlite",
    database: "db/data-base.sqlite",
    entities: [
        Quest
    ],
    synchronize: true
};

