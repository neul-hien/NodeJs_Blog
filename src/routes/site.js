import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
const route = express.Router();

route.get('/', SiteController.index)
route.get('/', SiteController.index)

export default route;