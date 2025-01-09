const connection = require("../db/conn");

//index
function index(req, res) {
  // res.json(postData);
  // const {title, content } = req.query

  const sql = "SELECT * FROM `posts`;";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database Query Failed" });
    res.json(results);
  });
}

//show
function show(req, res) {
  const id = parseInt(req.params.id);

  const sql = "SELECT * FROM `posts` WHERE `id` = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database Query Failed" });
    res.json(results);
  });

  // const postByid = postData.find((post) => post.id === id);
  // // console.log("trova",post);
  // if (!postByid) {
  //   return res.status(404).json({
  //     error: "Not found",
  //   });
  // }
  // res.send(postByid);
}

//store
function store(req, res) {
  // const { title, content, image, tags } = req.body;
  // if (!title || !content || !image?.length) {
  //   return res.status(400).json({ error: "invalid params" });
  // }
  // const newId = parseInt(postData.at(-1).id) + 1;
  // // console.log(newId);
  // newPost = {
  //   id: newId,
  //   title: title,
  //   content: content,
  //   image: image,
  //   tags: tags,
  // };
  // console.log(newPost);
  // postData.push(newPost);
  // res.status(201).json({
  //   message: "Post creato con successo!",
  //   post: newPost,
  // });
}

//update
function update(req, res) {
  // const id = parseInt(req.params.id);
  // let postByid = postData.find((post) => post.id === id);
  // if (!postByid) {
  //   return res.status(404).json({
  //     error: "Not found",
  //     message: "Post non torvato",
  //   });
  // }
  // const { title, content, image, tags } = req.body;
  // if (!title || !content || !image || !tags?.length) {
  //   return res.status(400).json({ error: "invalid params" });
  // }
  // postByid.title = title;
  // postByid.content = content;
  // postByid.image = image;
  // postByid.tags = tags;
  // res.send(postByid);
}

//modify
function modify(req, res) {
  // const id = parseInt(req.params.id);
  // res.json(`Modifica parziale del post con id ${id}`);
}

//destroy
function destroy(req, res) {
  const id = parseInt(req.params.id);

  // const postByid = postData.find((post) => post.id == id);

  // const postIndex = postData.indexOf(postByid);

  // postData.splice(postIndex, 1);

  // res.json(postData);

  const sql = "DELETE FROM `posts` WHERE `id` = ? ;";
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: "Database Query Failed" });
  });
}

module.exports = { index, show, store, update, modify, destroy };
