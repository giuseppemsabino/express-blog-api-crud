//index
function index(req,res) {
    res.send('lista dei post');
};

//show
function show(req, res) {
    const { id } = req.params;
    res.json(`Dettaglio del post ${id}`);
};

//update
function update (req,res){
    const {id}= req.params;
    res.json(`Modifica totale del post con id ${id}`);
};

//modify
function modify(req,res) {
    const {id}= req.params;
    res.json(`Modifica parziale del post con id ${id}`);
};

//destroy
function destroy (req,res) {
    const {id}= req.params;
    res.json(`Eliminazione del post con id ${id}`);
};

module.exports = {index, show, update, modify, destroy};