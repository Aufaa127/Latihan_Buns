import { Hono } from "hono";
import api from "./routes/api.routes";
import "dotenv/config";
import web from "./routes/web.routes";

const app = new Hono();

app.route("/", api);
app.route("/admin", web);

export default {
  port: 3000,
  fetch: app.fetch,
};
