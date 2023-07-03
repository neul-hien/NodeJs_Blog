import Course from "../models/Course.js";
import { multipleMongooseToObject, mongooseToObject } from "../../ulti/mongoose.js";
class SiteController {
  // [GET] /
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.render('home', { courses: multipleMongooseToObject(courses)});
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
  }

  // GET[] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
