import { Schema } from "mongoose"

export const MuseumSchema = new Schema ({
  name: {
    type: string, 
    require: true


},

  address: {
    
    type: string,

    require: true
  },

  type: {
    
    type: string,
    require: true

  }
  


})