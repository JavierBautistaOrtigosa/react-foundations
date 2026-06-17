import * as React from 'react'

export default function Exercises() {
  return (
    <div className='p-6'>
      {/* Uncomment ONE exercise at a time */}
      <Exercise01 />
      <Exercise02 />
      <Exercise03 />
      <Exercise04 />
      <Exercise05 />
      {/* <Exercise06 /> */}
    </div>
  )
}

/* -------------------------------------------------------
   Exercise 1 — Basic Counter
------------------------------------------------------- */

function Exercise01() {
  const [number, setNumber] = React.useState(0)

  return (
    <div className='p-6 mb-6 border border-gray-300 rounded bg-gray-50'>
      <h1 className='pb-4 font-semibold text-xl'>Exercise 1 - Basic Counter</h1>
      <button
        className='px-4 py-2 mb-2 bg-blue-400 text-white rounded'
        onClick={() => setNumber(number + 1)}
      >
        Increase
      </button>
      <p className='py-1 font-semibold'>{number}</p>
    </div>
  )
}

/* -------------------------------------------------------
   Exercise 2 — Double Increment
------------------------------------------------------- */

function Exercise02() {
  const [number, setNumber] = React.useState(0)

  return (
    <div className='p-6 mb-6 border border-gray-300 rounded bg-gray-50'>
      <h1 className='pb-4 font-semibold text-xl'>
        Exercise 2 - Double Increment
      </h1>
      <button
        className='px-4 py-2 mb-2 bg-blue-400 text-white rounded'
        onClick={() => setNumber(number + 2)}
      >
        Add 2
      </button>
      <p className='py-1 font-semibold'>{number}</p>
    </div>
  )
}

/* -------------------------------------------------------
   Exercise 3 — Two Independent Counters
------------------------------------------------------- */

function Exercise03() {
  const [counter1, setCounter1] = React.useState(0)
  const [counter2, setCounter2] = React.useState(0)

  return (
    <div className='p-6 mb-6 border border-gray-300 rounded bg-gray-50'>
      <h1 className='pb-4 font-semibold text-xl'>
        Exercise 3 - Two Independent Counters
      </h1>
      <button
        className='px-4 py-2 mb-2 bg-blue-400 text-white rounded'
        onClick={() => setCounter1(counter1 + 1)}
      >
        Add 1
      </button>
      <p className='pb-6 py-1 font-semibold'>{counter1}</p>
      <button
        className='px-4 py-2 mb-2 bg-blue-400 text-white rounded'
        onClick={() => setCounter2(counter2 + 2)}
      >
        Add 2
      </button>
      <p className='py-1 font-semibold'>{counter2}</p>
    </div>
  )
}

/* -------------------------------------------------------
   Exercise 4 — Controlled Input
------------------------------------------------------- */

function Exercise04() {
  const [text, setText] = React.useState('')

  return (
    <div className='p-6 mb-6 border border-gray-300 rounded bg-gray-50'>
      <h1 className='pb-4 font-semibold text-xl'>
        Exercise 4 - Controlled Input
      </h1>
      <div className='pb-4'>
        <input
          type='text'
          placeholder='Type something...'
          value={text}
          className='
        w-full h-10 px-3 text-sm
        bg-white text-neutral-900
        border border-neutral-300 rounded-md
        '
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p>{text}</p>
    </div>
  )
}

/* -------------------------------------------------------
   Exercise 5 — Show Typed Text
------------------------------------------------------- */

function Exercise05() {
  const [text, setText] = React.useState('')
  return (
    <div className='p-6 mb-6 border border-gray-300 rounded bg-gray-50'>
      <h1 className='pb-4 font-semibold text-xl'>
        Exercise 5 - Show Typed Text
      </h1>
      <div className='pb-4'>
        <input
          placeholder='Type anything...'
          value={text}
          className='
        w-full h-10 px-3 text-sm
        bg-white text-neutral-900
        border border-neutral-300 rounded-md
        '
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p>{text}</p>
    </div>
  )
}
