import {QuestRepository} from "../repository/quest.repository";

export class QuestService {
    public static getAll(): Promise<string[]> {
        return QuestRepository.getAll();
    }
}
