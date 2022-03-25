import { getRepository } from "typeorm";
import { Platform } from "../../entities/Platform";

export class DeletePlatformService {
    async execute(id:string) {
        const repo = getRepository(Platform);

        if(!(await repo.findOne(id))) {
            return new Error;
        }

        return repo.delete(id);
    }
}