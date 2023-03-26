import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import GeneralMiddleware from "@middleware/general.middleware";
import { GetApplicationMode } from "@utils/mode.util";
import {
  ServeClient,
  ServeClientStaticAssets,
} from "@middleware/client.middleware";

const port = process.env.PORT || 3000;
const mode = GetApplicationMode();

const envPath = mode === "development" ? "./.env.local" : "./.env";
dotenv.config({
  path: envPath,
});

//intialize server
const server: Express = express();

// serve static assets for client
server.use(ServeClientStaticAssets());

// logging middleware
server.use(GeneralMiddleware);

server.get("/api/v1", (req: Request, res: Response) => {
  res.json({
    project: "Typescript, React and Express Boilerplate",
    from: "ssjkhan",
  });
});

server.use(ServeClient);

server.get("/*", (_: Request, res: Response) => {
  res.send("Express + TypeScript 404");
});

server.listen(
  port,
  () => {
    console.log(
      `[server]: Server is running at http://localhost:${port} in ${mode} mode`,
    );
  },
);
