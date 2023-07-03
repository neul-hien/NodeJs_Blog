import siteRouter from './site.js'
import newsRouter from './news.js'
import coursesRouter from './course.js'
function route(app){
    app.use('/news',newsRouter )
    app.use('/course',coursesRouter )
    app.use('/', siteRouter )

}

export default route;
