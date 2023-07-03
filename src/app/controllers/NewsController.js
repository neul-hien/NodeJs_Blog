class NewsController{
    // [GET] /news
    index(req, res){
        res.render('news')
    }
    show(req, res){
        res.send('News detail');
    }
}
export default new NewsController();