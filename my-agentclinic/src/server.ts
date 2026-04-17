import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { Layout } from "./layouts/Layout.js";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => {
  return c.html(
    `<html>
      <head>
        <title>AgentClinic</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Layout>
          <h1>AgentClinic is open for business</h1>
        </Layout>
      </body>
    </html>`,
  );
});

const port = 4000;
serve({ port, fetch: app.fetch });
console.log("Server running at http://localhost:" + port + "/");

export default app;
