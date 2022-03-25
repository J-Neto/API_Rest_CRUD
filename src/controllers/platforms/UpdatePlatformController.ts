import { Request, Response } from "express";
import { UpdatePlatformService } from "../../services/platforms/UpdatePlatformService";

export class UpdatePlatformController {
    async handle(req:Request, res:Response) {
        const { id } = req.params;
        const { name } = req.body;

        const service = new UpdatePlatformService();

        const result = await service.execute({id, name});

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}