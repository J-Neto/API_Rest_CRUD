import { Request, Response } from "express";
import { GetOnePlatformService } from "../../services/platforms/GetOnePlatformService";

export class GetOnePlatformController {
    async handle(req:Request, res:Response) {
        const {id} = req.params;

        const service = new GetOnePlatformService();

        const result = await service.execute({id});

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}