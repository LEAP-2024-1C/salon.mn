import { Router } from "express";
import { getService } from "../controller/service-controller";

const router = Router();

router.route("/").get(getService);

export default router;