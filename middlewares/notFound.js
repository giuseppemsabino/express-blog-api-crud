function notFound(req,res,next){
    res.status(404);
    res.jason({
        status: 'KO',
        error: "Page not found",
    })
}

module.exports = notFound