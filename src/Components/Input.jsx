import React from 'react'

export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='
        w-full h-10 px-3 text-sm
        bg-white text-neutral-900
        border border-neutral-300 rounded-md
      '
    />
  )
}
