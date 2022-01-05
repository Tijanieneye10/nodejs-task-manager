import express from "express";
import { createTask, getAllTasks, getSingleTask, toggleCompleted } from "../controller/taskController.js";

const router = express.Router()

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(toggleCompleted);

export default router;