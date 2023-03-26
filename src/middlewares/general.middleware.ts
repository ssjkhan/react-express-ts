import { NextFunction, Request, Response } from "express";
import { GetApplicationMode } from "@utils/mode.util";
import Morgan from "morgan";

function logger() {
  const mode = GetApplicationMode();

  if (mode === "production") {
    return Morgan("combined");
  }
  return Morgan("dev");
}

export default [logger()];
