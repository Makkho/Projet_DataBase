import React from 'react'
//import { object, string, number } from 'yup';


export const forum = object({
  name: string().required(),
  type: string().required(),
  pricce: string().required(),




  star: number().required()
});

