import siteRouter from './site.js'
import coursesRouter from './course.js'
import meRouter from './me.js'
function route(app){
    app.use('/course',coursesRouter )
    app.use('/me',meRouter )
    app.use('/', siteRouter )

}

export default route;
