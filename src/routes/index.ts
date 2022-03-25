import { Router } from "express";
import { CreateGameController } from "../controllers/games/CreateGameController";
import { GetAllGamesController } from "../controllers/games/GetAllGamesControllers";

import { CreatePlatformController } from "../controllers/platforms/CreatePlatformController";
import { DeletePlatformController } from "../controllers/platforms/DeletePlatformController";
import { GetAllPlatformsController } from "../controllers/platforms/GetAllPlatformsController";
import { GetOnePlatformController } from "../controllers/platforms/GetOnePlatformController";
import { UpdatePlatformController } from "../controllers/platforms/UpdatePlatformController";

const router = Router();

router
    .route("/platforms")
    .get(new GetAllPlatformsController().handle)
    .post(new CreatePlatformController().handle);

router
    .route("/platforms/:id")
    .get(new GetOnePlatformController().handle)
    .put(new UpdatePlatformController().handle)
    .delete(new DeletePlatformController().handle);

router
    .route("/games")
    .get(new GetAllGamesController().handle)
    .post(new CreateGameController().handle)

export {router};