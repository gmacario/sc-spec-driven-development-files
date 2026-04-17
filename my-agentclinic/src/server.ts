import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

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
        <div class="layout">
          <header class="header">
            <nav class="nav">
              <a href="/">Home</a>
            </nav>
          </header>
          <main class="main">
            <h1>AgentClinic is open for business</h1>
          </main>
          <footer class="footer">
            <p>AgentClinic - where no agent suffers alone</p>
          </footer>
        </div>
      </body>
    </html>`,
  );
});

const port = 4000;
serve({ port, fetch: app.fetch });
console.log("Server running at http://localhost:" + port + "/");

export default app;
