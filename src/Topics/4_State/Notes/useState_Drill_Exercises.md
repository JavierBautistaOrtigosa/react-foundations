# 14‑Day useState Drill Sheet (Side‑by‑Side Edition)

===============================================================

## Patterns

- Rewrite all 7 patterns every day for 14 days.
- Each pattern begins with a Guided Link so you can jump deeper anytime.

1. Basic useState

> This component uses `useState` to create a piece of state called count, starting at 0. Because React re-renders the component whenever state changes, the `<p>` element always shows the current value of `count`. There’s no button or update logic yet — this drill is only about **declaring state and displaying it in JSX.**

```jsx
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return <p>{count}</p>
}
```

2. Event Handler Updating State

> This component shows how an event handler updates React state. The `handleClick` function runs when the button is clicked, and inside it `setCount(count + 1)` updates the state. Because React re-renders after every state change, the button’s text always displays the latest count. This drill teaches the core pattern: **define a handler → call the setter → React updates the UI.**

```jsx
const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return <button onClick={handleClick}>{count}</button>
}
```

3. Updating State with Previous Value

> This exercise shows how to update state using the **previous value**. Instead of `setCount(count + 1)`, it uses the updater function `setCount(prev => prev + 1)`. React guarantees that prev is always the latest state value at the moment the update runs, even if multiple updates happen in the same event. Clicking the button calls `increment`, which increases the count and re-renders the component with the new value.

> `setCount(prev => prev + 1)` and `setCount((prev) => prev + 1)` are identical. Parentheses are optional when there is only one parameter. Both forms use the updater function pattern, which guarantees React gives you the latest state value.

```jsx
const Ex03 = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
    </>
  )
}
```

4. useState with Strings

> This component stores a string in React state. `useState('Javier')` creates a state variable called `name`, and the `<h1>` displays that string. Whenever `setName` is called with a new value, React re-renders and the `<h1>` will show the updated name. This drill teaches the simplest pattern for string state: declare it → read it in JSX.

```jsx
const Ex04 = () => {
  const [name, setName] = useState('Javier')
  const updateName = () => {
    setName((prev) => 'Daniel')
  }

  return (
    <>
      <button onClick={updateName}>Update</button>
      <h1>{name}</h1>
    </>
  )
}
```

5. useState with Objects

> This exercise stores an object in React state. `useState({ name: 'Javier', age: 30 })` creates a `user` object, and the component renders both fields. The `updateAge` function uses the updater form `setUser(prev => ({ ...prev, age: prev.age + 1 }))`, which copies the previous object and updates only the `age` field. React then re-renders and shows the new age. This drill teaches the correct pattern for **immutable object updates** using the spread operator.

```jsx
const Ex05 = () => {
  const [user, setUser] = useState({
    name: 'Javier',
    age: 39
  })
  const updateAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1
    }))
  }

  return (
    <>
      <button onClick={updateAge}></button>
      <p>
        {user.name} - {user.age}
      </p>
    </>
  )
}
```

- Note:
  - Copying does NOT change anything. It just gives you `{ name: 'Javier', age: 30 }`
  - Now you want to change the age. To change it, you need to know what the old age was.
  - Where do you get the old age from? From `prev.age.`
  - So you do: age: prev.age + 1

6. useState with Arrays

> This component stores an array in React state. `useState(['a', 'b'])` creates a list of items, and the component renders them using `items.map(...)`. The `addItem` function uses the updater form `setItems(prev => [...prev, 'c'])`, which copies the previous array and adds a new item at the end. React re-renders and shows the updated list. This drill teaches the correct pattern for immutable array updates using the spread operator.

```jsx
const List = () => {
  const [items, setItems] = useState(['a', 'b'])

  const addItem = () => {
    setItems((prev) => [...prev, 'c'])
  }

  return (
    <ul>
      {items.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  )
}
```

7. Toggle Boolean State

> This component stores a **boolean** (`true`/`false`) in React state.` useState(false)` starts with `open` set to `false`. The `toggle` function uses the updater form `setOpen(prev => !prev)`, which flips the boolean every time the button is clicked. The button text uses a conditional expression: if `open` is `true`, it shows **Open**; if `false`, it shows **Closed**. This drill teaches the standard pattern for **toggling boolean state** in React.

```jsx
const Toggle = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  return <button onClick={toggle}>{open ? 'Open' : 'Closed'}</button>
}
```

8. Resetting State

> This component stores a **string** in state and shows it inside an `<input>`. Because the input’s `value` comes from `text`, it is a controlled input. When the user types, `onChange={(e) => setText(e.target.value)}` updates the state, and React re-renders with the new text. The `reset` function sets the state back to an empty string, which instantly clears the input. This drill teaches the core pattern for resetting state and controlling form fields.

```jsx
const Form = () => {
  const [text, setText] = useState('')

  const reset = () => {
    setText('')
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={reset}>Reset</button>
    </>
  )
}
```

---
