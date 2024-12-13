const express = require("express");
const app = express();
const mocksRouter = require("./routes/mocks.router");
const swaggerDocs = require("./swaggerConfig");

require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/mocks", mocksRouter);
swaggerDocs(app);
const PORT = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
