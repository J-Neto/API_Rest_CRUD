import { Request, Response } from "express";
import { CreatePlatformService } from "../../services/platforms/CreatePlatformService";

export class CreatePlatformController {
    async handle(req:Request, res: Response) {
        const {name} = req.body;

        const service = new CreatePlatformService();

        const result = await service.execute({name});

        return res.json(result);
    }
}