import {QuestService} from "../service/quest.service";

export class QuestController {

    public static getAll(): Promise<string[]> {
        return QuestService.getAll();
    }
}
