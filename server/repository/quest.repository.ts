import {connectionOptions} from "../../db/connection.options";
import {createConnection} from "typeorm";
import {Quest} from "../../model/quest.model";

export class QuestRepository {

    public static getAll(): Promise<Quest[]> {
        return new Promise((resolve, reject) => {
            createConnection(connectionOptions).then(async connection => {
                await connection.manager
                    .getRepository(Quest)
                    .createQueryBuilder()
                    .getMany()
                    .finally(async () => {
                        await connection.close();
                    })
                    .then((quests: Quest[]) => {
                        resolve(quests);
                    }).catch(error => {
                        reject(error);
                    });
            }).catch(error => {
                reject(error);
            });
        });
    }
}
