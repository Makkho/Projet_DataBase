import mongoose from "mongoose"
import { forumSchema } from "@/db/schema/forumschema"

export const ForumModel =
  mongoose.models.Forum || mongoose.model("Forum", forumSchema)