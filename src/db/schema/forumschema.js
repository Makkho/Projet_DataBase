import { Schema } from "mongoose"

export const forumSchema = new Schema ({

  type: { type: String, required: true },
  nom: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalcode: { type: Number, required: true },
  country: { type: String, required: true },
  kitchenType: {
    type: String,
  },
  averagePrice: {
    type: Number,
    min: 1,
    max: 5,
  },
  starCount: {
    type: Number,
    min: 1,
    max: 5,
  },
  artType: {
    type: String,
  },
  artMovement: {
    type: String,
  },
  isFree: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
  barType: {
    type: String,
  },
  parkType: {
    type: String,
  },
  public: {
    type: Boolean,
  },
})