
import { getRepository } from "typeorm";
import { Game } from "../../entities/Game";

type GetOneGameRequest = {
    id:string 
}

export class GetOneGameService {
    async execute({id}: GetOneGameRequest) {
        const repo = getRepository(Game);

        const game = await repo.findOne(id, {relations: ["platform"]});

        if(!game) {
            return new Error("Game does not exists!!");
        }

        return game;
    }
}