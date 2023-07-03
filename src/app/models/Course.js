import mongoose from "mongoose"
import slugGenerator from "mongoose-slug-updater";
const Schema = mongoose.Schema;
mongoose.plugin(slugGenerator);
const Course = new Schema({
  name: {type: String, require: true},
  description: String,
  img: String,
  videoId: String,
  slug: { type: String, slug: 'name', unique: true}
},{
  timestamps: true,
});
export default mongoose.model('Course', Course)