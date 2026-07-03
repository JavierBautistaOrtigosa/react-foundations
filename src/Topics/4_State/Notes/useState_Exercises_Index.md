## Exercises Index

- Exercise 1 — Basic Counter
- Exercise 2 — Double Increment
- Exercise 3 — Two Independent Counters
- Exercise 4 — Controlled Input
- Exercise 5 — Show Typed Text
- Exercise 6 - Boolean Toggle
- Exercise 7 - Show/Hide Text
- Exercise 8 - Reset Button
- Exercise 9 - Disable Button When Count > 5
- Exercise 10 - Two Inputs, One Output
- Exercise 11 - Triple Increment
- Exercise 12 — Increment and Decrement in One Click
- Exercise 13 — Two Counters Updated Together
- Exercise 14 — Click History Counter
- Exercise 15 — Toggle with Updater
- Exercise 16 — Add Item (string) to Array
- Exercise 17 — Remove Item from Array with slice()
- Exercise 18 — Update an Item in Array
- Exercise 19 — Toggle a Boolean Inside an Object
- Exercise 20 — Update Nested Object
- Exercise 21 — Full Name Derived from First + Last
- Exercise 22 — Disable Button Based on Input Length
- Exercise 23 — Filtered List Derived from Items + Query
  - Drills - Filtering & Search Logic
  - Exercise 23.1 - Filter list by query
  - Exercise 23.2 - Case‑insensitive search
  - Exercise 23.3 - Filter by multiple fields
  - Exercise 23.4 - Filter by boolean + text

- Exercise 24 — Two Related States (Split or Combine?)
  - Drills - Split vs Combine State
  - Exercise 24.1 - Split two independent fields
  - Exercise 24.2 - Combine related fields into one object
  - Exercise 24.3 - Derive full name from first + last
  - Exercise 24.4 - Identify what should NOT be in state

- Exercise 25 — Form Validation Derived from Fields
  - Drills - Derived Validation
  - Exercise 25.1 - Email + password validation
  - Exercise 25.2 - Password confirmation
  - Exercise 25.3 - Disable button based on validity
  - Exercise 25.4 - Show derived error messages

- Exercise 26 — Todo List (Add, Remove, Toggle)
  - Drills - Array CRUD (Core React Skill)
  - Exercise 26.1 - Add item to array
  - Exercise 26.2 - Remove item by id
  - Exercise 26.3 - Update item by id
  - Exercise 26.4 - Toggle boolean inside array item
  - Exercise 26.5 - Replace item entirely
- Exercise 27 — Form with Validation
  - Drills - Quantity & Counters (Shopping Cart Logic)
  - Exercise 27.1 - Increase quantity by id
  - Exercise 27.2 - Decrease quantity with min=1
  - Exercise 27.3 - Remove item when qty hits 0
  - Exercise 27.4 - Compute total quantity

- Exercise 28 — Shopping Cart Quantity Manager
- Exercise 29 — Light/Dark Theme Toggle
  - Drills - Toggles & UI State
  - Exercise 29.1 - Simple toggle
  - Exercise 29.2 - Toggle inside object
  - Exercise 29.3 - Multiple toggles in one component
  - Exercise 29.4 - Theme toggle with derived styles

- Exercise 30 — Click History with Derived Stats
  - Drills - Derived Stats & Analytics
  - Exercise 30.1 Total count
  - Exercise 30.2 First + last timestamp
  - Exercise 30.3 Average gap between events
  - Exercise 30.4 Min/max values

## useState Drills

### 1. Basic useState

> This component uses `useState` to create a piece of state called count, starting at 0. Because React re-renders the component whenever state changes, the `<p>` element always shows the current value of `count`. There’s no button or update logic yet — this drill is only about **declaring state and displaying it in JSX.**

```jsx
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return <p>{count}</p>
}
```

### 2. Event Handler Updating State

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

### 3. Updating State with Previous Value

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

### 4. useState with Strings

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

### 5. useState with Objects

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

### 6. useState with Arrays

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

### 7. Toggle Boolean State

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

### 8. Resetting State

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

## Methods with useState

### map()

`map()` creates a **new array** by transforming each item in the original array.

- When do we use it?
  - Rendering lists in React.
  - Converting data in JSX
  - Transforming arrays(ex: numbers -> strings, objects -> components)

- Why is it important?
  - Because React litarally depends on it.
  - Every list you render uses `map()`
  - Mastering `map()`, is like mastering 50% of React UI logic.

- Anatomy:

      ```js
      array.map((item) => {
        return something
      })
      ```

- Core patterns:
  - Tranform items:

    ```jsx
    nums.map((n) => n * 2)
    ```

  - Render JSX:

    ```jsx
    items.map((item) => <li>{item}</li>)
    ```

  - Extract fields:

    ```jsx
    users.map((u) => u.name)
    ```

  - Add new fields:

    ```jsx
    users.map((u) => ({ ...u, active: true }))
    ```

### filter()

`filter()` returns a **new array** containing only items that match a condition.

- When do we use it?
  - Search bars
  - Filtering lists
  - Showing only items that match user input
  - Removing items
  - Derived state in React

- Why is it important?
  - Because filtering + mapping **= real UI logic**.
  - Search bars, product lists, dashboards all use `filter()`.

- Anatomy:

      ```jsx
      array.filter((item) => {
        return condition
      })
      ```

- Core patterns:
  - Filter by text:

    ```jsx
    items.filter((item) => item.includes(query))
    ```

    - Case-insensitive:

    ```jsx
    items.filter((item) => item.toLowerCase().includes(query.toLowerCase())
    ```

    - Filter objects:

    ```jsx
    users.filter((u) => u.active)
    ```

    - Filter multiple conditions:

    ```jsx
    users.filter((u) => u.age > 18 && u.active)
    ```

### includes()

`includes()` checks if a string or array **contains** something.

- String version:
  - `'apple'.includes('app') // true`

- Array version:
  - `[1,2,3].includes(2) // true`

- When do we use it?
  - Search logic
  - Checking if a value exists
  - Quick membership checks
  - Filtering lists

- Why is it important?
  - Because **every search bar** uses `includes()`.
  - It's the simplest way to check if the text matches a query.

- Anatomy:

      ```js
      string.includes(substring)
      array.includes(value)
      ```

- Core patterns:
  - Search:

    ```js
    item.includes(query)
    ```

    - Case-insensitive:

    ```js
    item.toLowerCase().includes(query.toLowerCase())
    ```

    - Check membership:

    ```js
    selected.includes(id)
    ```

### join()

`join()` converts an array into a **single string**, separated by whatever you choose.

- Example:
  - `['a','b','c'].join(', ')`

- Result:
  - `"a, b, c"`

- When do we use it?
  - Displaying aarays in React.
  - Debugging.
  - Creating readable output.
  - Converting arrays into strings.

- Why is it important?
  - Because React cannot render arrays directly as text.
  - `join()` makes arrays readable.

- Anatomy:

      ```js
      array.join(separator)
      ```

- Core patterns:
  - Readable list:

    ```js
    items.join(', ')
    ```

    - No separator:

    ```js
    items.join('')
    ```

    - Custom formatting:

    ```js
    items.join(' | ')
    ```

### toUpperCase()

`toUpperCase()` converts a string to **ALL CAPS**.

- Example:
  - `'apple'.toUpperCase() // 'APPLE'`

- When do we use it?
  - Normalizing text.
  - Case-insensitive search.
  - Formatting UI labels.
  - Comparing strings.

- Why is it important?
  - Because search logic must be **case-insensitive.**
  - You normalize both sides -> compare -> get correct results.

- Anatomy:

      ```js
      string.toUpperCase()
      ```

- Core patterns:
  - Normalize search

    ```js
    string.toUpperCase().includes(query.toUpperCase())
    ```

    - Format UI

    ```js
    title.toUpperCase()
    ```

    - Compare strings

    ```js
    if (a.toUpperCase() === b.toUperCase()) {...}
    ```

### toLowerCase()

`toLowerCase` converts a string to **lowercase.**

- When do we use it?
  - Case-insensitive search.
  - Normalizing user input.
  - Comparing strings safely.

- Why is it important?
  - Search must ignore uppercase/lowecase.
  - Makes filtering predictable.

- Anatomy:

      ```js
      string.toLowerCase()
      ```

- Core patterns:
  - Normalize search:

    ```js
    item.toLowerCase().includes(query.toLowerCase())
    ```

  - Normalize input:

    ```js
    setQuery(e.target.value.toLowerCase())
    ```

  - Compare strings:

    ```js
    if (a.toLowerCase() === b.toLowerCase()) {...}
    ```

### find()

`find()` returns the **first item** that matches a condition.

- When do we use it?
  - CRUD logic.
  - Finding a track by id.
  - Getting a single object from a list.

- Why is it important?
  - Used constantly in favorites, cart systems, user lookup.
  - Cleaner than filter when you only need one item.

- Anatomy:

      ```js
      array.find((item) => {
        return condition
      })
      ```

- Core patterns:
  - Find by id:

    ```js
    users.find((u) => u.id === 3)
    ```

  - Find by name:

    ```js
    tracks.find((t) => t.name === 'Hello')
    ```

    - Find first match:

    ```js
    nums.find((n) => n > 10)
    ```

### some()

`some()` checks is at least on item in an array matches a condition.

- When do we use it?
  - Validation logic.
  - UI toggles ("show badge if any item is popular").
  - Checking if any item meets a requirement.
  - Quick boolean checks in lists.

- Why is it important?
  - Perfect for "does anything match" logic?
  - Used in forms, favourites, filters, and stats.
  - Cleaner than writing manual loops.

- Anatomy:

      ```js
      array.some((item) => {
        return condition
      })
      ```

- Core patterns:
  - Any track above popularity 80:

    ```js
    tracks.some((t) => t.popularity > 80)
    ```

    - Any favourite matches this id:

    ```js
    favourites.some((f) => f.id === track.id)
    ```

    - Any negative number:

    ```js
    nums.some((n) => n < 0)
    ```

### every()

`every()` checks if all items in an array match a condition.

- When do we use it?
  - Form validation ("all fields filled?").
  - Multi-select logic.
  - Checking consistency across items.
  - Ensuring all items meet a rule.

- Why is it important?
  - Perfect for "are all valid" logic.
  - Used in forms, filters, and stats.
  - Help create predictable UI behaviour.

- Anatomy:

```js
array.every((item) => {
  return condition
})
```

- Core patterns:
  - All favorites from the same artist

    ```js
    favorites.every(f => f.artist === favorites[0].artist)
    All numbers positive
    ```

  - All numbers positive:

    ```js
    nums.every(n => n > 0)
    All tracks explicit
    ```

  - All tracks explicit:

    ```js
    tracks.every((t) => t.explicit)
    ```

### reduce()

`reduce()` combines all items in an array into one single value.

- When do we use it?
  - Totals (duration, price, popularity).
  - Counts.
  - Analytics.
  - Derived values (averages, sums).

- Why is it important?
  - Essential for dashboards, stats, summaries.
  - Lets you compute values from lists cleanly.
  - Used heavily in data‑driven React apps.

- Anatomy:

      ```js
      array.reduce((acc, item) => {
        return acc + something
      }, initialValue)
      ```

- Core patterns:
  - Sum numbers:

    ```js
    nums.reduce((acc, n) => acc + n, 0)
    Total duration of tracks
    ```

  - Total duration of tracks:

    ```js
    tracks.reduce((acc, t) => acc + t.duration_ms, 0)
    Average popularity
    ```

  - Average popularity:

    ```js
    tracks.reduce((acc, t) => acc + t.popularity, 0) / tracks.length
    ```

### trim()

`trim()` removes whitespace from the start and end of a string.

- When do we use it?
  - Cleaning user input.
  - Search bars.
  - Form validation.
  - Preventing accidental empty submissions.

- Why is it important?
  - Prevents bugs caused by extra spaces.
  - Makes search and validation more reliable.
  - Essential for controlled inputs.

- Anatomy:

      ```js
      string.trim()
      ```

- Core patterns:
  - Clean search input:

    ```js
    setQuery(e.target.value.trim())
    Clean form fields
    ```

  - Clean form fields:

    ```js
    const name = input.trim()
    ```

  - Prevent empty-space submissions:

    ```js
    if (query.trim() === '') return
    ```

### Methods Index:

#### Array Methods Used Constantly in React:

These are the React essentials. If you master these, you can build 80% of UI logic.

- Core React Array Methods:
  - map() — render lists, transform data
  - filter() — search, remove items, conditional UI
  - find() — get a single item (e.g., find user by id)
  - findIndex() — locate item position for updates
  - some() — check if any item matches
  - every() — check if all items match
  - reduce() — totals, counts, aggregations
  - sort() — sorting lists (products, users, etc.)
  - slice() — pagination, immutability
  - concat() — immutable array updates
  - flat() — flatten nested arrays
  - flatMap() — map + flatten in one step

#### String Methods Used Constantly in React

These power search bars, filters, validation, formatting, and UI text.

- Core React String Methods
  - toLowerCase() — case‑insensitive search
  - toUpperCase() — formatting, normalization
  - trim() — clean user input
  - includes() — search logic
  - startsWith() — prefix matching
  - endsWith() — suffix matching
  - split() — convert string → array
  - replace() — formatting, sanitizing
  - replaceAll() — clean multiple occurrences

React uses strings everywhere — inputs, labels, search, validation — so these matter.

#### Object Methods Used Constantly in React

React state is often objects, so these matter for immutable updates.

- Core React Object Methods
  - Object.keys() — get field names
  - Object.values() — get field values
  - Object.entries() — iterate key/value pairs
  - Object.assign() — immutable updates
  - structuredClone() — deep copy objects

These are essential for updating nested state without mutation.

#### Number & Math Methods Used Often in React

Used for counters, pagination, UI calculations, animations, charts.

- Core React Number/Math Methods
  - parseInt() — convert input → number
  - parseFloat() — convert input → decimal
  - Math.round() — rounding
  - Math.floor() — pagination
  - Math.ceil() — pagination
  - Math.max() — find largest
  - Math.min() — find smallest

#### JSON Methods Used Constantly in React

Especially when working with APIs.

- Core JSON Methods
  - JSON.parse() — convert JSON → JS
  - JSON.stringify() — convert JS → JSON
  - React apps talk to APIs all the time — these are essential.

#### Utility Methods Used Everywhere

These aren’t array/string methods but are used constantly.

- Core Utility Methods
  - setTimeout() — delays, debounce
  - setInterval() — timers
  - clearTimeout() — cancel timers
  - clearInterval() — cancel intervals
