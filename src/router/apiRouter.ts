import { Router } from "express";
import api_controller from "../controller/api_controller";

const router = Router();

// Define the route and link it to the controller
router.route("/self").get(api_controller.self);

export default router;
