"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee-controller");
const router = (0, express_1.Router)();
router.route("/created-employee").post(employee_controller_1.createdEmloyee);
router.route("/all-employee").get(employee_controller_1.getAllEmployee);
router.route("/get-employee/:employeeID").get(employee_controller_1.getEmployee);
exports.default = router;
