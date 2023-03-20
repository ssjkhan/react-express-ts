import express, { NextFunction, Request, Response, Router } from "express";
import path from "path";

const router: Router = Router();

router.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `This is from client middleware \t${req.originalUrl}`,
  );
  next();
});

// function router(req: Request, res: Response, next: NextFunction): void {
//   console.log("THis is from client middleware");
//   next();
// }
router.get("/*", (_: Request, res: Response) => {
  res.sendFile(
    path.resolve(__dirname, "..", "client", "index.html"),
  );
});

export default router;
