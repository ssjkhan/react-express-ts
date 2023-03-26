import { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import dotenv, { DotenvConfigOptions } from "dotenv";
import path from "path";
import { GetApplicationMode } from "@utils/mode.util";
import { GetRootDir } from "@utils/filedir.util";

const mode = GetApplicationMode();

// logging middleware using morgan lib
function logger() {
  if (mode === "production") {
    return morgan("combined");
  }
  return morgan("dev");
}

// env var middleware using dotenv lib
function envVarInit() {
  let dotEnvConfig: DotenvConfigOptions = {};
  if (mode === "production") {
    dotEnvConfig.path = "";
  } else {
    dotEnvConfig.path = path.resolve();
  }

  return dotenv.config();
}

export default [logger()];
