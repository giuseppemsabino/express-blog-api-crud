const postData = require('../data/postList') 


//index
function index(req,res) {
    res.json(postData);
};

//show
function show(req, res) {
    const {id} = req.query;
    let findPostById = postData.filter((post) => post.id.includes(id))
    res.json(findPostById);
};

//update
function update (req,res){
    const id= req.params.id;
    res.json(`Modifica totale del post con id ${id}`);
};

//modify
function modify(req,res) {
    const id= parseInt(req.params.id);
    res.json(`Modifica parziale del post con id ${id}`);
};

//destroy
function destroy (req,res) {
    const id= parseInt(req.params.id);
    res.json(`Eliminazione del post con id ${id}`);
};

module.exports = {index, show, update, modify, destroy};