import { getRepository } from "typeorm";
import { Platform } from "../../entities/Platform";
import { Game } from "../../entities/Game";

type GameRequest = {
    name: string;
    description: string;
    price: number;
    platform_id: string;
};

export class CreateGameService {
    async execute({ name, description, price, platform_id }: GameRequest): Promise <Game | Error> {
        const repoGame = getRepository(Game);
        const repoPlatform = getRepository(Platform);


        if (!(await repoPlatform.findOne(platform_id))) {
            return new Error("Platform does not exists");
        }

        const game = repoGame.create({ name, description, price, platform_id });
        await repoGame.save(game);
        console.log(game)

        return game;
    }
}