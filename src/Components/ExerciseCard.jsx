import React from 'react'

export default function ExerciseCard({ title, children }) {
  return (
    <div className='p-6 mb-6 border border-gray-300 rounded bg-gray-50'>
      <h1 className='pb-4 font-semibold text-xl'>{title}</h1>
      {children}
    </div>
  )
}
