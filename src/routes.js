import express from "express";
import { root as rootController } from "./controllers.js";

const router = express.Router();

router.get("*/:domain", rootController);

export default router;
