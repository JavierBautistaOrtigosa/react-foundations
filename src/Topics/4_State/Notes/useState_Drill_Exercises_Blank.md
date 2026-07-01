# 14‑Day useState Drill Blank Sheet

===============================================================

1. Basic useState

```jsx
const Ex01 = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  return <p>{counter}</p>
}
```

2. Event Handler Updating State

```jsx
const Ex02 = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <p>{counter}</p>
    </>
  )
}
```

1. Updating State with Previous Value

```jsx
const Ex03 = () => {
  const [count, setCount] = useState(0)
const increment = () => {
      setCount(prev => ...prev, prev +1)
}

  return (
    <>
      <button onClick={increment}></button>
      <p>{count}</p>
    </>
  )
}
```

4. useState with Strings // Confusion with dot (".") syntax (only for objects).

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

6. useState with Arrays // Need drills to get familiar with map()

```jsx
const Ex06 = () => {
  const [items, setItems] = useState(['a', 'b'])
  const addItem = () => {
    setItems((prev) => [...prev, 'c'])
  }
  return (
    <>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </>
  )
}
```

7. Toggle Boolean State

```jsx

```

8. Resetting State

```jsx

```

## Notes:

### Spread operator

- The spread operator (...) is only valid for objects and arrays, because those are the only data types that can be expanded into multiple elements or key/value pairs.

### Ex08

- In the context of Exercise 08, setText((prev) => '') is unnecessary, it works, but it’s the wrong pattern. For strings, you do not need the updater function. Just pass the new value directly:`setText('')`. The updater form is only needed when the new value depends on the previous value.

### Ex05

- Confusion again with the following line `age: prev.age + 1`.
- Need practice with the whole updateAge function:

```jsx
const updateAge = () => {
  setUser((prev) => ({
    ...prev,
    age: prev.age + 1
  }))
}
```

### Ex06

- Need practice with map()

```jsx
return (
  <>
    <button onClick={addItem}>Add</button>
    <ul>
      {items.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  </>
)
```
