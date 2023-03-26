import express, { Express, NextFunction, Request, Response } from "express";
import GeneralMiddleware from "@middleware/general.middleware";
import { GetApplicationMode } from "@utils/mode.util";
import {
  ServeClient,
  ServeClientStaticAssets,
} from "@middleware/client.middleware";
import EnvInit from "@middleware/env.middleware";

// initialize server variables
EnvInit();
const port = process.env.PORT || 3000;
const mode = GetApplicationMode();
console.log(process.env);
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
