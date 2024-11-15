import express from "express";
import { configDotenv } from "dotenv";
const app = express();

const port = configDotenv.PORT;
console.log(port, configDotenv.PORT);

app.listen(configDotenv.PORT, () => {
  console.log(`server us Running on port ${configDotenv.PORT}`);
});
