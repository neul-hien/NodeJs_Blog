import Course from "../models/Course.js";
import { multipleMongooseToObject, mongooseToObject } from "../../ulti/mongoose.js";

class CourseController {
  // [GET] /
  // GET[] /show
  async show(req, res, next) {
    try {
      const course = await Course.findOne({slug: req.params.slug});
      res.render('courses/show', { courses: mongooseToObject(course)});
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
  }
  // [GET] /courses/creates
  async create(req, res){
    res.render('courses/create')
  }

  // [POST] /courses/store
  async store(req, res) {
    try {
      const formData = req.body;
      formData.img = `https://i.ytimg.com/vi_webp/${req.body.videoId}/maxresdefault.webp`;
  
      const course = new Course(formData);
  
      await course.save();
  
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.render('error'); 
    }
  }
  // [GET] /course/:id/edit
  async edit(req, res){
    try {
      const course = await Course.findById(req.params.id);
      res.render('courses/edit', { courses: mongooseToObject(course)});
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
      
  }
  // [PUT] /course/:id
  async update(req, res){
    try {
      const course = await Course.updateOne({_id: req.params.id }, req.body);
      res.redirect('/me/stored/courses')
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
      
  }
  //[DELETE] /course/:id
  async delete(req, res){
    try {
      await Course.deleteOne({_id: req.params.id });
      res.redirect('/me/stored/courses')
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      res.render('error');
    }
  }
  
}

export default new CourseController();
