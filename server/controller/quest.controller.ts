import {QuestService} from "../service/quest.service";
import {Quest} from "../../model/quest.model";

export class QuestController {

    public static getAll(): Promise<Quest[]> {
        return QuestService.getAll();
    }
}
