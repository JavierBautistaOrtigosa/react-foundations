# 14‑Day useState Drill Blank Sheet

===============================================================

1. Basic useState

```jsx
const Ex01 = () => {
  const [count, setCount] = useState(0)
  return <p>{count}</p>
}
```

2. Event Handler Updating State

```jsx
const Ex02 = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return <button onClick={handleClick}>{count}</button>
}
```

3. Updating State with Previous Value

```jsx
const Ex03 = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
      setCount(prev => ...prev + 1)
  }
  return <button onClick={increment}>{count}</button>
}
```

4. useState with Strings // Confusion with dot (".") syntax (only for objects).

```jsx
const Ex04 = () => {
  const [name, setName] = useState('Javier')

  return (
    <>
      <button onClick={() => setName('Dani')}>{name}</button>
      <h1>{name}</h1>
    </>
  )
}
```

5. useState with Objects // Confusion with parentheses and curly braces...

```jsx
const Ex05 = () => {
  const [user, setUser] = useState({
    name: 'Javier',
    age: 30
  })
  const updateAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1
    }))
  }

  return (
    <button onClick={updateAge}>
      {user.name} - {user.age}
    </button>
  )
}
```

6. useState with Arrays // Need drills to get familiar with map()

```jsx
const Ex06 = () => {
  const[(items, setItems)] = useState(['a', 'b'])
  const addItem = () => {setItems((prev) => [...prev, 'c'])}

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
const Ex07 = () => {
  const [isOn, setIsOn] = useState(false)
  const toggle = () => {
    setIsOn((prev) => !prev)
  }
  return <button onClick={toggle}>{isOn ? 'Open' : 'Closed'}</button>
}
```

8. Resetting State

```jsx
const Ex08 = () => {
  const [text, setText] = useState('')
  const reset = () => {
    setText('')
  }
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={reset}>{Reset}</button>
    </>
  )
}
```

## Notes:

- The spread operator (...) is only valid for objects and arrays, because those are the only data types that can be expanded into multiple elements or key/value pairs.

- In the context of Exercise 08, setText((prev) => '') is unnecessary, it works, but it’s the wrong pattern. For strings, you do not need the updater function. Just pass the new value directly:`setText('')`. The updater form is only needed when the new value depends on the previous value.
