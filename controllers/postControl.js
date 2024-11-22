const postData = require("../data/postList");

//index
function index(req, res) {
  res.json(postData);
}

//show
function show(req, res) {
  const id = parseInt(req.params.id);

  
  const postByid = postData.find((post) => post.id == id);
  
  // console.log("trova",post);

  if (!postByid) {
    return res.status(404).json({
      error: "pippo",
    });
  }

  res.send(postByid);
}

//store
function store(req,res){
  const newPost = req.body;
  console.log(req.body);
  
  res.json(newPost)
}

//update
function update(req, res) {
  const id = req.params.id;
  res.json(`Modifica totale del post con id ${id}`);
}

//modify
function modify(req, res) {
  const id = parseInt(req.params.id);
  res.json(`Modifica parziale del post con id ${id}`);
}

//destroy
function destroy(req, res) {
    const id = parseInt(req.params.id);

    const postByid = postData.find((post) => post.id == id);

    const postIndex = postData.indexOf(postByid)

    postData.splice(postIndex, 1)

    res.json(postData)
    
}

module.exports = { index, show, store, update, modify, destroy };
