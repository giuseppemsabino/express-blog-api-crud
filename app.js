const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");
const posts = require("./data/postList");
const port = 3000;

//REGISTRING MIDDLEWARES
const errorsHandler = require("./middlewares/errorsHandler");


// JSON PARSER FOR BODY REQUEST
app.use(express.json());


app.use(express.static("public/images"));
app.use("/", postsRouter);


//*ERROR HANDLER
app.use(errorsHandler);

//*START LISTENING
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
