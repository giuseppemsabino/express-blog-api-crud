const express = require('express');
const router = express.Router();
const postsControllers = require("../controllers/post-control")

//index
router.get('/posts', postsControllers.index );

//show
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Dettaglio del post ${id}`);
});

//store
router.post('/', (req, res) => {
    res.json(`Crea un nuovo post`)
});

//update
router.put('/:id', (req,res) => {
    const {id}= req.params;
    res.json(`Modifica totale del post con id ${id}`);
});

//modify
router.patch('/:id', (req,res)=> {
    const {id}= req.params;
    res.json(`Modifica parziale del post con id ${id}`);
});

//delete
router.delete('/:id',  (req,res)=> {
    const {id}= req.params;
    res.json(`Eliminazione del post con id ${id}`);
});









module.exports = router;