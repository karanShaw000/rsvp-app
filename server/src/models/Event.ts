import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  rsvpList: string[];
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  rsvpList: { type: [String], default: [] },
});

export default mongoose.model<IEvent>("event", EventSchema);

