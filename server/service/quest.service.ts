import {QuestRepository} from "../repository/quest.repository";
import {Quest} from "../../model/quest.model";

export class QuestService {
    public static getAll(): Promise<Quest[]> {
        return QuestRepository.getAll();
    }
}
