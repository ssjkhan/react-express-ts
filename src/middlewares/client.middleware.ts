import express, { Request, Response } from "express";
import { GetApplicationMode } from "@utils/mode.util";
import { GetBuildClientDir, GetClientRootDir } from "@utils/filedir.util";
import path from "path";

// serve static assets
export function ServeClientStaticAssets() {
  const mode = GetApplicationMode();
  let staticPaths: string[] = [];

  if (mode === "production") {
    staticPaths.push(GetBuildClientDir());
  } else {
    staticPaths.push(path.resolve(__dirname, "..", "client", "public"));
    staticPaths.push(path.resolve(__dirname, "..", "client"));
  }

  console.log(staticPaths);

  return staticPaths.map((path) => express.static(path));
}

// serve client
export function ServeClient(req: Request, res: Response) {
  const mode = GetApplicationMode();
  let clientPath: string = "";

  if (mode === "production") {
    clientPath = path.resolve(GetBuildClientDir(), "index.dist.html");
  } else {
    clientPath = path.resolve(GetClientRootDir(), "index.html");
  }

  console.log(`Client path:\t ${clientPath}`);
  res.sendFile(clientPath);
}

export default {};
