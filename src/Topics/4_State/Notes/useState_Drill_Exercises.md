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
const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return <button onClick={increment}>{count}</button>
}
```

4. useState with Strings

> This component stores a string in React state. `useState('Javier')` creates a state variable called `name`, and the `<h1>` displays that string. Whenever `setName` is called with a new value, React re-renders and the `<h1>` will show the updated name. This drill teaches the simplest pattern for string state: declare it → read it in JSX.

```jsx
const Name = () => {
  const [name, setName] = useState('Javier')

  return <h1>{name}</h1>
}
```

5. useState with Objects

> This exercise stores an object in React state. `useState({ name: 'Javier', age: 30 })` creates a `user` object, and the component renders both fields. The `updateAge` function uses the updater form `setUser(prev => ({ ...prev, age: prev.age + 1 }))`, which copies the previous object and updates only the `age` field. React then re-renders and shows the new age. This drill teaches the correct pattern for **immutable object updates** using the spread operator.

```jsx
const Profile = () => {
  const [user, setUser] = useState({ name: 'Javier', age: 30 })

  const updateAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }))
  }

  return (
    <p>
      {user.name} – {user.age}
    </p>
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

> This component stores a **string** in state and shows it inside an `<input>`. Because the input’s `value` comes from `text`, it is a controlled input. When the user types, `setText(e.target.value)` updates the state, and React re-renders with the new text. The `reset` function sets the state back to an empty string, which instantly clears the input. This drill teaches the core pattern for resetting state and controlling form fields.

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

## filter(), includes(), toLowerCase(), join(), map()

1. Filter items that include a letter

```jsx
const Ex1 = () => {
  const items = ['Apple', 'Banana', 'Kiwi', 'Pear']
  const result = items.filter((item) => item.includes('a'))

  return <p>{result.join(', '))}</p>
}
```

2. Filter items that include a substring

```jsx
const Ex2 = () => {
  const items = ['Apple', 'Banana', 'Kiwi', 'Pear']
  const result = items.filter((item) => item.includes('an'))

  return <p>{result.join(', ')}</p>
}
```

3. Case‑insensitive includes()

```jsx
const Ex3 = () => {
  const items = ['Apple', 'banana', 'kiwi', 'Pear']
  const query = 'apple'

  const result = () =>
    items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))

  return <p>{result.join(', ')}</p>
}
```

4. Filter numbers greater than 10

```jsx
const Ex4 = () => {
  const nums = [5, 12, 8, 20, 3]
  const result = nums.filter((n) => n > 10)

  return <p>{result.join(', ')}</p>
}
```

5. Filter objects by text field

```jsx
const Ex5 = () => {
  const items = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'grape' },
    { name: 'kiwi' },
    { name: 'orange' }
  ]

  const result = items.filter((item) => item.name.includes('ap'))

  return (
    <ul>
      {result.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </ul>
  )
}
```

6. Filter objects by multiple fields

```jsx
const Ex6 = () => {
  const items = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ]

  const query = 'red'

  const result = items.filter(
    (item) => item.name.includes(query) || item.color.includes(query)
  )

  return (
    <ul>
      {result.map((item, idx) => (
        <li key={idx}>
          {item.name} — {item.color}
        </li>
      ))}
    </ul>
  )
}
```

7. map() — uppercase all items

```jsx
const Ex7 = () => {
  const items = ['apple', 'banana', 'kiwi']
  const result = items.map((item) => item.toUpperCase())

  return <p>{result.join(', ')}</p>
}
```

8. map() — extract field from objects

```jsx
const Ex8 = () => {
  const items = [
    { name: 'apple', price: 2 },
    { name: 'banana', price: 1 }
  ]

  const result = items.map((item) => item.name)

  return <p>{result.join(', ')}</p>
}
```

9.  join() — turn array into string

```jsx
const Ex9 = () => {
  const items = ['a', 'b', 'c']
  const result = items.join(', ')

  return <p>{result}</p>
}
```

10. Combine filter + map + join

```jsx
const Ex10 = () => {
  const items = ['apple', 'banana', 'kiwi', 'pear']

  const result = items
    .filter((item) => item.includes('a'))
    .map((item) => item.toUpperCase())
    .join(' | ')

  return <p>{result}</p>
}
```
