import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import clientMiddleware from "./middlewares/client.middleware";

const mode = process.env.NODE_ENV === "production"
  ? "production"
  : "development";
const envPath = mode === "development" ? "./.env.local" : "./.env";
dotenv.config({
  path: envPath,
});

const server: Express = express();
const port = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, "client", "public")));
server.use(express.static(path.resolve(__dirname, "client")));

server.get("/api/v1", (req: Request, res: Response) => {
  res.json({
    project: "Typescript, React and Express Boilerplate",
    from: "ssjkhan",
  });
});

server.use(clientMiddleware);

server.get("/*", (_: Request, res: Response) => {
  res.send("Express + TypeScript 404");
});

server.listen(
  port,
  () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  },
);
