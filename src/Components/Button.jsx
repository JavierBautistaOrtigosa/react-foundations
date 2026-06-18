import React from 'react'

export default function Button({ children, onClick }) {
  return (
    <button
      className='px-4 py-2 mb-2 bg-blue-400 text-white rounded'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
