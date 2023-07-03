import Course from "../models/Course.js";
import { multipleMongooseToObject, mongooseToObject } from "../../ulti/mongoose.js";

class MeController {
  // [GET] /stored/courses
  async storedCourses(req, res) {
    try {
      const courses = await Course.find({});
      res.render('me/stored-courses', { courses: multipleMongooseToObject(courses)});
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
    
  }
 
}

export default new MeController();
