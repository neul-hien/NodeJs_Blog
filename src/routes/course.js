import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const route = express.Router();

route.get('/:slug', CourseController.show);

export default route;
