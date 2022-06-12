import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import app from "@/app";
import "dotenv/config";

const swaggerDocument = YAML.load(path.join(__dirname, "/swagger.yaml"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
