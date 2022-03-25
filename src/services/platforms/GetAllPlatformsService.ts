import { getRepository } from "typeorm";
import { Platform } from "../../entities/Platform";


export class GetAllPlatformService {
    async execute() {
        const repo = getRepository(Platform);

        const platforms = await repo.find();

        return platforms;
    }
}