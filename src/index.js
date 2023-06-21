import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan'
import path, { extname }  from 'path'
import { fileURLToPath } from 'url';

//const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
const filePathViews = path.join(currentDir, 'resource/views');
const filePathPublic = path.join(currentDir, 'public');

app.use(express.static(filePathPublic))
//HTTP logger
app.use(morgan('combined'))


//template engine
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine','hbs');
app.set('views', filePathViews);

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})