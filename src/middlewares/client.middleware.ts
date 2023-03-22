import express from "express";
import { GetApplicationMode } from "@utils/mode.util";
import path from "path";

// serve static assets
export function ClientStaticAssets() {
  const mode = GetApplicationMode();
  let staticPaths: string[] = [];

  if (mode === "production") {
    staticPaths.push(path.resolve(__dirname, "..", "client", "dist"));
  } else {
    staticPaths.push(path.resolve(__dirname, "..", "client", "public"));
    staticPaths.push(path.resolve(__dirname, "..", "client"));
  }

  return staticPaths.map((path) => express.static(path));
}

// serve client
export function ServeClient() {
  const mode = GetApplicationMode();
  let clientPath: string = "";

  if (mode === "production") {
    clientPath = path.resolve(__dirname, "..", "client", "dist", "index.html");
  }
}

export default {};
