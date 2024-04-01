import React from 'react'


export const Place = () => {
  return (
    <div>
    <form>
      <input placeholder='place' type='string' required />
      <br />
      
      <input placeholder='Name' type='string' required />
      <br />

        <input placeholder='Village' type='string' required />
        <br />
        
        <input placeholder='PostalCode' type='number' required />



      <button type='submit'>Ajouter</button>

      </form>
      </div>
  )
}

