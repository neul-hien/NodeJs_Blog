import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const route = express.Router();

route.post('/store', CourseController.store);   
route.get('/create', CourseController.create);
route.get('/:id/edit', CourseController.edit);
route.put('/:id', CourseController.update);
route.delete('/:id/delete', CourseController.delete);
route.get('/:slug', CourseController.show);
export default route;
