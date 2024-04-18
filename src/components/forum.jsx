import React from 'react'


export const Place = () => {
  return (
    <div className='flex justify-center '>
    <form>
      <input placeholder='place' type='string' required />
      <br />
      
      <input placeholder='Name' type='string' required />
      <br />

        <input placeholder='Village' type='string' required />
        <br />
        
        <input placeholder='PostalCode' type='number' required />
        <br />

        <input placeholder='country' type='string' required />
        <br />



      <button className='' type='submit'>Ajouter</button>

      </form>
      </div>
  )
}

