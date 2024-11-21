const express = require('express');
const router = express.Router();
const postsControllers = require("../controllers/post-control")

//index
router.get('/posts', postsControllers.index );

//show
router.get('/:id', postsControllers.show);

//store
router.post('/', postsControllers.show);

//update
router.put('/:id',postsControllers.update);

//modify
router.patch('/:id', postsControllers.modify);

//destroy
router.delete('/:id', postsControllers.destroy);









module.exports = router;