const express = require("express");
const app = express();
const posts = require("./data/postList");
const port = 3000;

//REGISTRING MIDDLEWARES
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound")
const checkTime = require("./middlewares/checkTime");


// JSON PARSER FOR BODY REQUEST
app.use(express.json());
app.use(express.static("public"));
app.use(checkTime);


const postsRouter = require("./routers/posts");
app.use("/", postsRouter);


//*ERROR HANDLER
app.use(errorsHandler);
app.use(notFound);

//*START LISTENING
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
