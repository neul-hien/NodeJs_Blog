import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan'
import path, { extname }  from 'path'
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';


//const exphbs = require('express-handlebars')
//connect db
db.connect();
const app = express()
const port = 3000
const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
const filePathViews = path.join(currentDir, 'resource/views');
const filePathPublic = path.join(currentDir, 'public');

app.use(express.static(filePathPublic))

//HTTP logger
//app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine','hbs');
app.set('views', filePathViews);

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at  http://localhost:${port}`)
})