import { Request, Response } from "express";
import { GetOneGameService } from "../../services/games/GetOneGameService";

export class GetOneGameController {
    async handle(req:Request, res:Response) {
        const {id} = req.params;

        const game = new GetOneGameService();

        const result = await game.execute({id});

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}