const express = require('express');
const app = express();
const path = require('path');
const postsRouter = require('./routers/posts')
const posts= require('./data/postList')
const port = 3000;


// console.log(app);

// JSON PARSER FOR BODY REQUEST
app.use(express.json());

app.use(express.static('public/images'));



app.use('/', postsRouter)


app.get ('/', (req,res) => {
    res.send('server del mio blog')
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
    
})