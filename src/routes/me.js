import express from 'express';
import meController from '../app/controllers/MeController.js';

const route = express.Router();

route.get('/stored/courses', meController.storedCourses);
export default route;
