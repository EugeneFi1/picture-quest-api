export class QuestController {

    public static getAll(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            resolve(["first", "second"]);
            reject("ERROR");
        });
    }
}
