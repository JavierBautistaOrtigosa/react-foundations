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
      {/* <Exercise15 /> */}
      {/* <Exercise16 /> */}
      {/* <Exercise17 /> */}
      {/* <Exercise18 /> */}
      {/* <Exercise19 /> */}
      {/* <Exercise20 /> */}
      {/* <Exercise21 /> */}
      {/* <Exercise22 /> */}
      {/* <Exercise23 /> */}
      {/* <Exercise30 /> */}
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
  const [count, setCount] = React.useState(0)

  return (
    <ExerciseCard title='Exercise 9 — Disable Button When Count > 5'>
      {/* Use HTML button element to properly see the results. Otherwise overrides... */}
      <button onClick={() => setCount((c) => c + 1)} disabled={count >= 5}>
        Add 1
      </button>
      <ValueDisplay>{count}</ValueDisplay>
      <Button onClick={() => setCount(0)}>Reset</Button>
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

// Exercise 13 — Two Counters Updated Together // START HERE ON MONDAY!

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

    // Notes:

    // You don’t need updater functions here because:

    // ----- counter1’s update does not depend on counter2
    // ----- counter2’s update does not depend on counter1
    // ----- neither update depends on the previous value inside the same event
  )
}

// Exercise 14 — Click History Counter

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
    <ExerciseCard>
      <Button
        onClick={() => {
          setOn((prev) => !prev)
        }}
      >
        Toggle
      </Button>
      <ValueDisplay>{on ? 'ON' : 'OFF'}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 16 — Add Item (string) to Array

function Exercise16() {
  const [input, setInput] = React.useState('')
  const [array, setArray] = React.useState([])

  return (
    <ExerciseCard>
      <Input onChange={(e) => setInput(e.target.value)} />

      <Button
        onClick={() => {
          setArray((prev) => [...prev, input])
        }}
      >
        Add
      </Button>
      <ValueDisplay>{array.join(', ')}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 17 — Remove Item from Array with slice()

function Exercise17() {
  const [input, setInput] = React.useState(0)
  const [array, setArray] = React.useState([])

  return (
    <ExerciseCard>
      <Input onChange={(e) => setInput(e.target.value)} />
      <div className='mb-4'></div>
      <Button
        onClick={() => {
          setArray((prev) => [...prev, input])
        }}
      >
        Add
      </Button>
      <ValueDisplay>{array.join(', ')}</ValueDisplay>
      <div className='mb-2'></div>
      <Button
        onClick={() => {
          setArray((prev) => prev.slice(0, -1))
        }}
      >
        Delete Last
      </Button>
    </ExerciseCard>
  )
}

/*
Add this to your notes:

Why .slice(0, -1) works

- slice() returns a new array (immutable)
- 0 = start at the beginning
- -1 = stop one before the last item

Result: last item removed

Example:

Code:

prev = [1, 2, 3, 4]
prev.slice(0, -1) → [1, 2, 3]
*/

// Exercise 18 — Update an Item in Array

function Exercise18() {
  const [items, setItems] = React.useState([
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' }
  ])

  return (
    <ExerciseCard>
      <Button
        onClick={() => {
          setItems((prev) =>
            prev.map((item) =>
              item.id === 2 ? { ...item, value: 'Updated!' } : item
            )
          )
        }}
      >
        Update Item 2
      </Button>
      <ValueDisplay>{JSON.stringify(items)}</ValueDisplay>
    </ExerciseCard>

    // Add this to your notes:
    //
    // Updating an item in an array of objects always follows this rule:
    //
    // - map over the array →
    // - find the matching object →
    // - return a new updated copy →
    // - return all other objects unchanged
    //
    // That’s exactly what your line does.
  )
}

// Exercise 19 — Toggle a Boolean Inside an Object

function Exercise19() {
  const [settings, setSettings] = React.useState({
    isOnline: false
  })

  return (
    <ExerciseCard>
      <Button
        onClick={() => {
          setSettings((prev) => ({
            ...prev,
            isOnline: !prev.isOnline
          }))
        }}
      >
        Toggle
      </Button>

      <ValueDisplay>{settings.isOnline ? 'ON' : 'OFF'}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 20 — Update Nested Object

function Exercise20() {
  const [state, setState] = React.useState({
    user: {
      name: 'Javier',
      age: 39
    }
  })

  return (
    <ExerciseCard>
      <Button
        onClick={() => {
          setState((prev) => ({
            ...prev,
            user: {
              ...prev.user,
              age: prev.user.age + 1
            }
          }))
        }}
      >
        Increment Age
      </Button>
      <ValueDisplay>{state.user.age}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 21 — Full Name Derived from First + Last

function Exercise21() {
  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')

  return (
    <ExerciseCard>
      <Input placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <div className='mb-4'></div>
      <Input
        placeholder='Surname'
        onChange={(e) => setSurname(e.target.value)}
      />
      <ValueDisplay>
        {name} {surname}
      </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 22 — Disable Button Based on Input Length

function Exercise22() {
  const [input, setInput] = React.useState('')

  return (
    <ExerciseCard>
      <Input
        placeholder='Type anything...'
        type='text'
        onChange={(e) => setInput(e.target.value)}
      />
      <div className='mb-4'></div>
      <Button disabled={input.length < 5}>Submit</Button>
      <ValueDisplay>{input}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 23 — Filtered List Derived from Items + Query

function Exercise23() {
  const items = ['apple', 'banana', 'orange', 'grape', 'kiwi']
  const [query, setQuery] = React.useState('')
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <ExerciseCard>
      <Input
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value)}
      />

      <ValueDisplay>{filtered.join(', ')}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 24 — Two Related States (Split or Combine?)

function Exercise24() {
  const [first, setFirst] = React.useState('')
  const [last, setLast] = React.useState('')

  const full = `${first} ${last}`.trim()

  return (
    <ExerciseCard>
      <Input
        placeholder='First name'
        onChange={(e) => setFirst(e.target.value)}
      />

      <div className='mb-4'></div>

      <Input
        placeholder='Last name'
        onChange={(e) => setLast(e.target.value)}
      />

      <ValueDisplay>{full}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 25 — Form Validation Derived from Fields

function Exercise25() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const isValid = email.includes('@') && password.length >= 6

  return (
    <ExerciseCard>
      <Input
        placeholder='Email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className='mb-4'></div>

      <Input
        placeholder='Password (min 6 chars)'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button disabled={!isValid}>Submit</Button>

      <ValueDisplay>{isValid ? 'Valid form' : 'Invalid form'}</ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 26 — Todo List (Add, Remove, Toggle)

function Exercise26() {
  const [input, setInput] = React.useState('')
  const [todos, setTodos] = React.useState([])

  function handleAdd() {
    if (!input.trim()) return

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: input,
        done: false
      }
    ])

    setInput('')
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  function handleRemove(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <ExerciseCard>
      <Input
        placeholder='Add todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button onClick={handleAdd}>Add</Button>

      <ValueDisplay>
        {todos.map((todo) => (
          <div key={todo.id} className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />

            <span className={todo.done ? 'line-through' : ''}>{todo.text}</span>

            <Button onClick={() => handleRemove(todo.id)}>Delete</Button>
          </div>
        ))}
      </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 27 — Form with Validation

function Exercise27() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirm, setConfirm] = React.useState('')

  const isValid =
    email.includes('@') && password.length >= 6 && confirm === password

  return (
    <ExerciseCard>
      <Input
        placeholder='Email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className='mb-4'></div>

      <Input
        placeholder='Password (min 6 chars)'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className='mb-4'></div>

      <Input
        placeholder='Confirm password'
        type='password'
        onChange={(e) => setConfirm(e.target.value)}
      />

      <Button disabled={!isValid}>Submit</Button>

      <ValueDisplay>
        {isValid ? 'Form is valid' : 'Form is invalid'}
      </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 28 — Shopping Cart Quantity Manager

function Exercise28() {
  const [cart, setCart] = React.useState([
    { id: 1, name: 'Apple', qty: 1 },
    { id: 2, name: 'Banana', qty: 2 },
    { id: 3, name: 'Orange', qty: 1 }
  ])

  function increase(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  function decrease(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
    )
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <ExerciseCard>
      <ValueDisplay>
        {cart.map((item) => (
          <div key={item.id} className='flex items-center gap-3 mb-2'>
            <span>{item.name}</span>

            <Button onClick={() => decrease(item.id)}>-</Button>
            <span>{item.qty}</span>
            <Button onClick={() => increase(item.id)}>+</Button>

            <Button onClick={() => removeItem(item.id)}>Remove</Button>
          </div>
        ))}
      </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 29 — Light/Dark Theme Toggle

function Exercise29() {
  const [dark, setDark] = React.useState(false)

  const themeStyles = {
    backgroundColor: dark ? '#111' : '#fff',
    color: dark ? '#fff' : '#111',
    padding: '20px',
    borderRadius: '8px'
  }

  return (
    <ExerciseCard>
      <Button onClick={() => setDark((prev) => !prev)}>Toggle Theme</Button>

      <ValueDisplay>
        <div style={themeStyles}>{dark ? 'Dark Mode' : 'Light Mode'}</div>
      </ValueDisplay>
    </ExerciseCard>
  )
}

// Exercise 30 — Click History with Derived Stats

function Exercise30() {
  const [clicks, setClicks] = React.useState([])

  function handleClick() {
    setClicks((prev) => [...prev, Date.now()])
  }

  const total = clicks.length

  const firstClick = clicks[0] ? new Date(clicks[0]).toLocaleTimeString() : '—'

  const lastClick = clicks[clicks.length - 1]
    ? new Date(clicks[clicks.length - 1]).toLocaleTimeString()
    : '—'

  const averageGap =
    clicks.length > 1
      ? Math.round(
          (clicks[clicks.length - 1] - clicks[0]) / (clicks.length - 1)
        )
      : 0

  return (
    <ExerciseCard>
      <Button onClick={handleClick}>Add Click</Button>

      <ValueDisplay>
        <div>Total clicks: {total}</div>
        <div>First click: {firstClick}</div>
        <div>Last click: {lastClick}</div>
        <div>Avg gap (ms): {averageGap}</div>

        <div className='mt-4'>History: {clicks.join(', ')}</div>
      </ValueDisplay>
    </ExerciseCard>
  )
}
