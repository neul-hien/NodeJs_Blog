import Course from "../models/Course.js";
import { multipleMongooseToObject, mongooseToObject } from "../../ulti/mongoose.js";

class CourseController {
  // [GET] /
  // GET[] /search
  async show(req, res) {
    try {
      const courses = await Course.findOne({slug: req.params.slug});
      res.render('courses/show', { courses: mongooseToObject(courses)});
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
  }
}

export default new CourseController();
