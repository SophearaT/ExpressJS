import express from 'express';
import { createTeacher, deleteTeacherById, getAllTeacher, getTeacherById, updateTeacherById } from '../controllers/teacher.controller.js';
import { teacherMiddleware } from '../middlewares/index.js';


const teacherRoute = express.Router();

teacherRoute.get('/',teacherMiddleware, getAllTeacher)
teacherRoute.get('/:id', getTeacherById)
teacherRoute.delete('/:id', deleteTeacherById)
teacherRoute.post('/', createTeacher)
teacherRoute.patch('/:id', updateTeacherById)

export default teacherRoute;