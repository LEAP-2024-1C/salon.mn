import { Router } from "express";
import { createdEmloyee } from "../controller/employee-controller";
import exp from "constants";

const router = Router();
router.route("/created-employee").post(createdEmloyee);
export default router;
