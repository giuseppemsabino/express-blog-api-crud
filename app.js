require('dotenv').config();

const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.HOST_PORT;
const domain = process.env.HOST_DOMAIN;

//REGISTRING MIDDLEWARES
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound")

// JSON PARSER FOR BODY REQUEST
app.use(express.json());
app.use(cors());
app.use(express.static("public"));



const postsRouter = require("./routers/posts");
app.use("/", postsRouter);


//*ERROR HANDLER
app.use(errorsHandler);
app.use(notFound);

//*START LISTENING
app.listen(port, () => {
  console.log(`App listening at ${domain}:${port}`);
});
