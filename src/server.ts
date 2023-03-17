import express, { Express, Request, Response } from "express";

const server: Express = express();
const port = process.env.PORT || 3000;

server.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

server.listen(
  port,
  () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  },
);
