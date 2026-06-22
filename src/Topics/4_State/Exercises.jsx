import * as React from 'react'
import ExerciseCard from '../../Components/ExerciseCard'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import ValueDisplay from '../../Components/ValueDisplay'

export default function Exercises() {
  return (
    <div className='p-6'>
      {/* <Exercise01 /> */}
      {/* <Exercise02 /> */}
      {/* <Exercise03 /> */}
      {/* <Exercise04 /> */}
      {/* <Exercise05 /> */}
      {/* <Exercise06 /> */}
      {/* <Exercise07 /> */}
      {/* <Exercise08 /> */}
      {/* <Exercise09 /> */}
      {/* <Exercise10 /> */}
      {/* <Exercise11 /> */}
      {/* <Exercise12 /> */}
      {/* <Exercise13 /> */}
      <Exercise14 />
      {/* <Exercise15 /> */}
      {/* <Exercise16 />  */}
      {/* <Exercise17 /> */}
      {/* <Exercise18 /> */}
    </div>
  )
}

// Exercise 1 — Basic Counter

function Exercise01() {
  const [number, setNumber] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 1 - Basic Counter'>
      <Button onClick={() => setNumber(number + 1)}>Increase</Button>
      <p className='py-1 font-semibold'>{number}</p>
    </ExerciseCard>
  )
}

// Exercise 2 — Double Increment

function Exercise02() {
  const [number, setNumber] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 2 - Double Increment'>
      <Button onClick={() => setNumber(number + 2)}>Add 2</Button>
      <ValueDisplay>{number}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 3 — Two Independent Counters

function Exercise03() {
  const [counter1, setCounter1] = React.useState(0)
  const [counter2, setCounter2] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 3 - Two Independent Counters'>
      <Button onClick={() => setCounter1(counter1 + 1)}>Add 1</Button>
      <ValueDisplay>{counter1}</ValueDisplay>

      <Button onClick={() => setCounter2(counter2 + 2)}>Add 2</Button>
      <ValueDisplay>{counter2}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 4 — Controlled Input

function Exercise04() {
  const [text, setText] = React.useState('')

  return (
    <ExerciseCard title='Exercise 4 - Controlled Input'>
      <div className='pb-4'>
        <Input
          value={text}
          placeholder='Type something...'
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <ValueDisplay>{text}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 5 — Show Typed Text

function Exercise05() {
  const [text, setText] = React.useState('')

  return (
    <ExerciseCard title='Exercise 5 - Show Typed Text'>
      <div className='pb-4'>
        <Input
          value={text}
          placeholder='Type anything...'
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <ValueDisplay>{text}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 6 - Boolean Toggle

function Exercise06() {
  const [isOnline, setIsOnline] = React.useState(false)
  return (
    <ExerciseCard title='Exercise 6 - Boolean Toggle'>
      <Button onClick={() => setIsOnline(!isOnline)}>Toggle</Button>
      <ValueDisplay>{String(isOnline)}</ValueDisplay>
      {/* 2nd Option: */}
      <ValueDisplay>{isOnline ? 'Online' : 'Offline'}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 7 - Show/Hide Text

function Exercise07() {
  const [textVisible, setTextVisible] = React.useState(true)

  return (
    <ExerciseCard title='Exercise 7 - Show/Hide Text'>
      <Button onClick={() => setTextVisible(!textVisible)}>Show/Hide</Button>
      <ValueDisplay>{textVisible && 'Visible'}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 8 - Reset Button

function Exercise08() {
  const [number, setNumber] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 8 - Reset Button'>
      <Button onClick={() => setNumber(number + 1)}>Add 1</Button>
      <ValueDisplay>{number}</ValueDisplay>
      <Button onClick={() => setNumber(0)}>Reset</Button>
    </ExerciseCard>
  )
}

// Exercise 9 - Disable Button When Count > 5

function Exercise09() {
  const [number, setNumber] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 9 — Disable Button When Count > 5'>
      <Button onClick={() => setNumber(number + 1)} disabled={number > 5}>
        Add 1
      </Button>
      <ValueDisplay>{number}</ValueDisplay>
      <Button onClick={() => setNumber(0)}>Reset</Button>
    </ExerciseCard>
  )
}

// Exercise 10 - Two Inputs, One Output

function Exercise10() {
  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')

  return (
    <ExerciseCard title='Exercise 10 - Two Inputs, One Output'>
      <Input
        placeholder='first name'
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder='last name'
        onChange={(e) => setSurname(e.target.value)}
      />
      <ValueDisplay>
        My full name is: {name} {surname}
      </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 11 - Triple Increment

function Exercise11() {
  const [number, setNumber] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 11 - Triple Increment'>
      <Button
        onClick={() => {
          setNumber((prev) => prev + 1)
          setNumber((prev) => prev + 1)
          setNumber((prev) => prev + 1)
        }}
      >
        Triple
      </Button>
      <ValueDisplay>{number}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 12 — Increment and Decrement in One Click

function Exercise12() {
  const [counter, setCounter] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 12 — Increment and Decrement in One Click'>
      <Button
        onClick={() => {
          setCounter((prev) => prev + 1)
          setCounter((prev) => prev - 1)
          setCounter((prev) => prev + 1)
        }}
      >
        Test
      </Button>
      <ValueDisplay>{counter}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 13 — Two Counters Updated Together

// Notes:

// You don’t need updater functions here because:

// ----- counter1’s update does not depend on counter2
// ----- counter2’s update does not depend on counter1
// ----- neither update depends on the previous value inside the same event

function Exercise13() {
  const [counter1, setCounter1] = React.useState(0)
  const [counter2, setCounter2] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 13 — Two Counters Updated Together'>
      <Button
        onClick={() => {
          setCounter1(counter1 + 1)
          setCounter2(counter2 + 2)
        }}
      >
        Update Both
      </Button>

      <ValueDisplay>Counter 1: {counter1} </ValueDisplay>
      <ValueDisplay>Counter 2: {counter2} </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 14 — Click History Counter

// Notes:

// You must use the updater function:

// ----- setCounter(prev => [...prev, prev.length + 1])

// Why?

// ----- prev is always the latest array.
// ----- prev.length + 1 gives you the next number.
// ----- [...prev, newValue] appends immutably.
// ----- React can detect the change because you created a new array.
// ----- This is the exact pattern the exercise is teaching..

// function Exercise14() {
//   const [counter, setCounter] = React.useState([])

//   return (
//     <ExerciseCard title='Exercise 14 — Click History Counter'>
//       <Button onClick={() => setCounter((prev) => [...prev, prev.length + 1])}>
//         Add Click
//       </Button>
//       <ValueDisplay>{counter.join(', ')}</ValueDisplay>
//     </ExerciseCard>
//   )
// }

function Exercise14() {
  const [counter, setCounter] = React.useState([])

  return (
    <ExerciseCard>
      <Button
        onClick={() => {
          setCounter((prev) => [...prev, prev.length + 1])
        }}
      >
        Add
      </Button>
      <ValueDisplay>{counter.join(', ')}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 15 — Toggle with Updater

function Exercise15() {
  const [on, setOn] = React.useState(false)

  return (
    <ExerciseCard title='Exercise 15 — Toggle with Updater'>
      <Button onClick={() => setOn((prev) => !prev)}>Toggle</Button>
      <ValueDisplay>{on ? 'ON' : 'OFF'}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 16 — Add Item to Array

function Exercise16() {
  const [counter, setCounter] = React.useState([])

  return (
    <ExerciseCard title='Exercise 16 — Add Item to Array'>
      <Button onClick={() => setCounter((prev) => [...prev, prev.length + 1])}>
        Add
      </Button>
      <ValueDisplay>{counter.join(', ')}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 17 — Remove Item from Array

function Exercise17() {
  const [counter, setCounter] = React.useState([])

  return (
    <ExerciseCard title='Exercise 17 — Remove Item from Array'>
      <Button onClick={() => setCounter((prev) => [...prev, prev.length + 1])}>
        Test
      </Button>
      <Button onClick={() => setCounter((prev) => prev.slice(0, -1))}>
        Remove Last
      </Button>
      <ValueDisplay>{counter.join(', ')}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 18 — Update an Item in Array
