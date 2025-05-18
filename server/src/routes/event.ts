import express from "express";
import EventController from "../controllers/event";

const router = express.Router();

router.get("/", EventController.getAllEvents);

router.patch("/:id/rsvp", EventController.toggleRsvp);

export { router as eventRouter };

