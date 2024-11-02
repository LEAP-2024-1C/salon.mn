import { Router } from "express";
import {
  createdEmloyee,
  getAllEmployee,
  getEmployee,
} from "../controllers/employee-controller";

const router = Router();
router.route("/created-employee").post(createdEmloyee);
router.route("/all-employee").get(getAllEmployee);
router.route("/get-employee/:employeeID").get(getEmployee);

export default router;
