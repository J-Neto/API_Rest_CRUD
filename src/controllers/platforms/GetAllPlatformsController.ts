import { Request, Response } from "express";
import { GetAllPlatformService } from "../../services/platforms/GetAllPlatformsService";


export class GetAllPlatformsController {
    async handle(req:Request, res: Response) {
        const service = new GetAllPlatformService();

        const platforms = await service.execute();

        return res.json(platforms);
    }
}