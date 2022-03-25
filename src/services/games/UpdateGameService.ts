import { getRepository } from "typeorm";
import { Game } from "../../entities/Game";
import { Platform } from "../../entities/Platform";

type GameUpdateRequest = {
    id: string;
    name: string;
    description: string;
    price: number;
    platform_id: string;
};

export class UpdateGameService {
    async execute({id, name, description, price, platform_id}: GameUpdateRequest){
        const repoGame = getRepository(Game);
        const repoPlatform = getRepository(Platform);

        const game = await repoGame.findOne(id);
        const platform = await repoPlatform.findOne(platform_id);

        if(!game) {
            return new Error("Game does not exists!!");
        }

        if(!platform) {
            return new Error("Platform does not exists!!");
        }

        if(name) {
            game.name = name;
        } else {
            game.name = game.name;
        }

        game.description = description ? description : game.description;
        game.price = price ? price : game.price;
        game.platform_id = platform_id ? platform_id : game.platform_id;

        await repoGame.save(game);

        return game;
    }
}