import { NextFunction, Request, Response } from "express"
import asyncCatch from "../utils/asyncCatch"
import Event from "../models/Event";

class EventController {
  static USER_ID = "user123";

  static getAllEvents = asyncCatch(
    async (_: Request, res: Response, __: NextFunction) => {
      let events = await Event.find().lean();

      events = events.map((e) => {
        const isUserRsvped = e.rsvpList.includes(this.USER_ID)
        return { ...e, isUserRsvped }
      })

      res.status(200).json({
        message: "All Events",
        data: { events }
      });
    }
  );

  static toggleRsvp = asyncCatch(
    async (req: Request, res: Response, __: NextFunction) => {
      const event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ message: "Event not found" });

      // const userId = req.body.userId;
      // if(!userId)

      const isRSVPed = event.rsvpList.includes(this.USER_ID);

      if (isRSVPed) {
        event.rsvpList = event.rsvpList.filter((id) => id !== this.USER_ID);
      } else {
        event.rsvpList.push(this.USER_ID);
      }

      await event.save();

      res.status(200).json({
        message: "RSVPed Successfully",
      })
    }
  )
}
export default EventController
