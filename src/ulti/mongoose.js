export const multipleMongooseToObject = (mongoose) => {
    return mongoose.map((item) => item.toObject());
  };
  
  export const mongooseToObject = (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  };
  