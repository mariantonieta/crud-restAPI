import { Router } from "express";

import { getEmployees, createEmploye, deleteEmploye, updateEmploye, getEmployee } from "../controlers/employee.controler.js";
const router = Router()
router.get('/employess',  getEmployees)
router.get('/employess/:id', getEmployee)
router.post('/employess', createEmploye);
router.patch('/employess/:id', updateEmploye)
router.delete('/employess/:id', deleteEmploye)
export default router