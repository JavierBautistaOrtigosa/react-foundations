# 14‑Day useState Drill Blank Sheet

===============================================================

1. Basic useState

```jsx
const Counter = () => {
  const [count, setCount] = useState(0)
  return <p>{count}</p>
}
```

2. Event Handler Updating State

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

```jsx
const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () {
      setCount(prev = prev + 1)
  }
  return <button onClick={increment}>{count}</button>
}
```

4. useState with Strings

```jsx
const Name = () => {
  const [name, setName] = useState('Javier')
  return <h1>{name}</h1>
}
```

5. useState with Objects

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

6. useState with Arrays

```jsx
const List = () => {
  const [item, setItems] = useState(['a', 'b'])
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

```jsx
const Toggle = () => {
  const [open, setOpen] = useState(true)

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  return <button onClick={Toggle}>{open ? 'Open' : 'Closed'}</button>
}
```

8. Resetting State

```jsx
const Form = () => {
  const [text, setText] = useState('')

  const reset = () => {
    setText('')
  }

  return <input value={text} onChange={(e) => setText(e.target.value)} />
  <button onClick={reset}>Reset</button>
}
```
