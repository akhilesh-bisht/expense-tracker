import express from "express";
import * as controller from "../controller/controller.js";

const router = express.Router();

router
  .route("/categories")
  .post(controller.create_Categories)
  .get(controller.get_Categories);

router
  .route("/transaction")
  .post(controller.create_Transaction)
  .get(controller.get_Transaction)
  .delete(controller.delete_Transaction);

router.route("/labels").get(controller.get_Labels);

export default router;
