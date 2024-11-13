import { Router } from "express";
import {
  addunAvailableTime,
  createAvailableDates,
  createdEmloyee,
  deleteEmployee,
  deleteUnAvailableTime,
  getAllEmployee,
  loginArtist,
  getEmployee,
  updateEmployee,
} from "../controllers/employee-controller";

const router = Router();
router.route("/created-employee").post(createdEmloyee);
router.route("/all-employee").get(getAllEmployee);
router.route("/artist").post(loginArtist);
router.route("/get-employee/:employeeID").get(getEmployee);
router.route("/update-employee/:employeeID").put(updateEmployee);
router.route("/delete-employee/:employeeID").delete(deleteEmployee);
router.route("/create-available-dates/:employeeID").post(createAvailableDates);
router.route("/controlTime").post(addunAvailableTime);
router.route("/delete-unavailable-time").delete(deleteUnAvailableTime);

export default router;
