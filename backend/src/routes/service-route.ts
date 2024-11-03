import { Router } from "express";
import {
  createdService,
  deleteService,
  getOneService,
  getService,
  updateService,
} from "../controllers/service-controller";

const router = Router();

router.route("/").get(getService);
router.route("/:serviceID").get(getOneService);
router.route("/create-service").post(createdService);
router.route("/delete-service/:serviceID").delete(deleteService);
router.route("/update-service/:serviceID").put(updateService);

export default router;
