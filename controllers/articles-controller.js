const articlesController = {};

articlesController.all = (req, res) => {
    res.status(200).json({data: 'All articles!', message:'okay'})
}

articlesController.one = (req, res, next) => {
    if(parseInt(req.params.id) == 2 ) {
    res.status(200).json({
        data: `Article ${req.params.id}`, message: 'okay'
    }) 
    } else {
        return next();
    }
}

module.exports = articlesController;