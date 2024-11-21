const postData = require("../data/postList");

//index
function index(req, res) {
  res.json(postData);
}

//show
function show(req, res) {
  const id = parseInt(req.params.id);

  const postByid = postData.find((post) => post.id === id);

  if (!postByid) {
    return res.status(404).json({
      error: "Not found",
    });
  }

  res.send(postByid);
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

    const postByid = postData.find((post) => post.id === id);

    const postIndex = postData.indexOf(postByid)

    postData.splice(postIndex, 1)

    res.json(postData)
    
}

module.exports = { index, show, update, modify, destroy };
