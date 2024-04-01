import { Schema } from "mongoose"

export const forumSchema = new Schema ({

  name: {
    type: string,
    require: true,

  },

  adress: {
    type: string,
    require: true,

  },

  village: {
    type: string,
    require: true,

  },

  postalcode: {
    type: string,
    require: true,

  },

  country: {
    type: string,
    require: true,
  }

})
