import { getRepository } from "typeorm";
import { Game } from "../../entities/Game";


export class GetAllGamesService {
    async execute() {
        const repo = getRepository(Game);

        const games = await repo.find({
            relations:["platform"]
        });

        return games;
    }
}