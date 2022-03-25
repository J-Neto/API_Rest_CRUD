import { Request, Response } from "express";
import { DeletePlatformService } from "../../services/platforms/DeletePlatformService";

export class DeletePlatformController {
    async handle(req:Request, res:Response) {
        const {id} = req.params;

        const service = new DeletePlatformService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.status(204).end();
    }
}