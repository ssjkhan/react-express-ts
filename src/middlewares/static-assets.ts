import express, { Request, Response, Router } from "express";

const router: Router = Router();

function ServeDevStaticAssets() {
}

function ServeProdStaticAssets() {}

const mode = process.env.NODE_ENV;
if (mode === "production") {
  ServeProdStaticAssets();
} else {
  ServeDevStaticAssets();
}

export default router;
