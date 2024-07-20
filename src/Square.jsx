import React, { useState } from 'react'

export default function Square({value, onSquareClick}) {


    
    
  return (
    <>
     <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-large rounded-lg text-center me-2 mb-2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" onClick={onSquareClick}  >
    {value}
    
</button >

    </>
  )
}
