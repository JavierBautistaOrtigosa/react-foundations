# React useState Mastery - Notes

### Exercise 11 - Triple Increment

**1. The Button formula**

- A button that triggers a state update must pass an **arrow function** to `onClick`.
  `<Button onClick={() => {}}></Button>`

- **Why:**
  - React expects a function, not the result of a function.

**2. The setState formula**

- When updating state based on the **previous value**, you must use the updater function:
  `setNumber(prev => prev + 1)`

**Why:**

- `prev` always contains the latest state value, even when React batches updates.
- The updater function is required when the new value depends on the old one.

**3. The full formula**

```jsx
<Button
  onClick={() => {
    setNumber((prev) => prev + 1)
  }}
></Button>
```

**4. Triple increment formula (the real point of exercise 11)**

```jsx
<!-- - Exercise 11 requires: -->
setNumber((prev) => prev + 1)
setNumber((prev) => prev + 1)
setNumber((prev) => prev + 1)
```

**Why:**

- Because each updater function receives the **updated** value:
  - First call: `prev = current`
  - Second call: `prev = current + 1`
  - Third call: `prev = current + 2`

React processes them in order, using the latest value each time.

**Why** `prev` instead of `number`?

- Because number is **stale** … meaning that **number** does not update inside the same event, while **prev** always receives the latest value.

For instance, if we use `number`:

```jsx
setNumber(number + 1) // First call: number + 1 → 1
setNumber(number + 1) // Second call: number + 1 → still 1
setNumber(number + 1) // Third call: number + 1 → still 1
```

The updater function fixes it:

```jsx
setNumber((prev) => prev + 1) // First call: prev = 0 → returns 1
setNumber((prev) => prev + 1) // Second call: prev = 1 → returns 2
setNumber((prev) => prev + 1) // Third call: prev = 2 → returns 3
```

- prev = live, updated value
- number = stale snapshot
- React calls each updater in order, giving you the fresh value each time

### Exercise 14 - Click History Counter

**1. The Button formula**

- A button that triggers a state update must pass an **arrow function** to `onClick`.

```jsx
<Button onClick={() => {}}></Button>
```

**Why:**

- React expects a function, not the result of a function.

**2. The setState formula for arrays**

- When updating an array in React, you must create a **new array** instead of mutating the old one.

The immutable array-update formula is:

```jsx
setArray((prev) => [...prev, newItem])
```

**Why:**

- React state must remain immutable.
- [...prev] creates a **new array**.
- Appending `newItem` at the end is safe and predictable.
- React re-renders because the array reference changes.

**3. The full formula for Exercise 14**

```jsx
<Button
  onClick={() => {
    setCounter((prev) => [...prev, prev.length + 1])
  }}
>
  Add Click
</Button>
```

**What this does:**

- `prev` is the current array.
- `prev.length + 1` generates the next click number.
- [...prev, prev.length + 1 ] creates a **new array** with the new number appended.

**Why this works:**

- `prev` is the current array.
- [...prev] copies the array.
- `prev.length` calculates the next click count.
- The new array is returned to React.
- React sees a new array reference, so it re-renders.

**4. The `join()` formula**

- To display an array in a readable format, use: `counter.join(', ')`

**What it does:**

- Converts the array into a **string.**
- Inserts a "comma" `,` between each element.
- Produces output like:
  - "1, 2, 3, 4" instead of [1, 2, 3, 4].

**Why we use it:**

- React cannot render arrays directly as text.
- `join()` turns the array into a human-friendly string.
- It keeps the click history clean and readable.

### Exercise 15 - Toggle with Updater

**1. The Button formula**

A button that triggers a state update must pass an **arrow function** to `onClick`.

```jsx
<Button onClick={() => {}}></Button>
```

**Why:**

- React expects a function, not the result of a function.

**2. The setState formula for booleans**

- When toggling a boolean, and the new value depends on the previous value, you must use the **updater function**.

```jsx
setOn((prev) => !prev)
```

**Why:**

- `prev` always contains the latest state value.
- React may batch updates, so reading `on` directly can give you a stale value.
- `!prev` flips the boolean safely and predictably.

**3. The full formula**

```jsx
<Button
  onClick={() => {
    setOn((prev) => !prev)
  }}
>
  Toggle
</Button>
```

**4. The state formula:**

```jsx
const [on, setOn] = React.useState(false)
```

**What this does:**

- `prev` is the current boolean (`true` or `false`)
- `!prev` flips it.
- React receives a new value and re-renders.

### Exercise 16 - Add String to Array (Input + Updater)

**1. The Input formula**

An input that updates state must pass an **arrow function** to `onChange` and read the value from the event.

`<Input onChange={(e) => setInput(e.target.value)} />`

**Why:**

- React expects a function, not a value.
- `e.target.value` gives you the latest text typed by the user.
- `input` becomes the controlled input value.

**2. The setState formula for adding items to an array**

When updating an array, you must create a **new array**, never mutate the old one.

`setArray((prev) => [...prev, input])`

**Why:**

- React state must remain immutable.
- `[...prev]` copies the existing array.
- `input` is appended at the end.
- React re-renders because the array reference changes.

**3. The full formula**

```jsx
<Button
  onClick={() => {
    setArray((prev) => [...prev, input])
  }}
>
  Add
</Button>
```

**The state formula**

```jsx
const [input, setInput] = React.useState('')
const [array, setArray] = React.useState([])
```

**What this does:**

- `input` holds whatever the user typed.
- `prev` is the current array.
- `[...prev, input]` creates a **new array** with the new string appended.
- React receives a new array and re-renders.

**5. we use `prev` instead of array**

Inside an event, `array` is a **stale snapshot**, it does not update until the event finishes.

Using the updater function:

```jsx
setArray((prev) => [...prev, input])
```

**Why:**

- `prev` = fresh, updated array
- The new string is always appended correctly.
- No stale state bugs.

**Displaying the string list**

`<ValueDisplay>{array.join(', ')}</ValueDisplay>
`

**Why:**

- join(', ') converts the array into a readable string.
- Each added word appears in order: "hello, world, react, ...".

**Extra notes**

```jsx
// [...prev, input] — the new array
// This creates a brand‑new array:

// ...prev → copy all existing items

// input → append the new string at the end

// So if:

// Code example:

// prev = ["hello", "world"]
// input = "react"

// Then:

// Code example:

// [...prev, input] = ["hello", "world", "react"]
```

### Exercise 19 - Toogle a Boolean Inside an Object

#### How to "setup" the state "container".

```jsx
const [settings, setSettings] = React.useState({
  isOnline: false
})
```

1. `const [settings, setSettings] = ...`

This is React giving a state variable and a function to update it.

- `settings` is the current value.
- `setSettings` is how to change it.

Is like saying: "Here's a box called `settings` use `setSettings` to change it.

2. `React.useState(...)`

This is us telling React: "I want to store some data, and here's the starting value."
React will remember this value between renders.

3. The initial object

```jsx
{
  isOnline: false
}
```

This is the initial shape of your state (the default state or starting point).
Is like saying: "My settings object starts with one property: `isOnline`, and right now it's `false`".

#### How to "setup" the button.

1. The `onClick` arrow function.

`onClick={() => {}}`

This is React saying: "When the user clicks this button, run the code inside here".
This is just the trigger.

2. Calling `setSettings`.

`setSettings(() => ({}) )`
`setSettings((prev) => ({...prev, })`
`setSettings((prev) => ({ ...prev, isOnline: !prev.isOnline })`

- !IMPORTANT — When returning an object from an arrow function, you must wrap the object in parentheses.

Without parentheses:

`(prev) => { ...prev }`

JavaScript thinks the {} is a function body, not an object literal.
Since there is no return statement, the function returns undefined.

With parentheses:

`(prev) => ({ ...prev })`

The parentheses tell JavaScript:

“This is an object literal — return it.”

This is why we write:

```jsx
setSettings((prev) => ({
  ...prev,
  isOnline: !prev.isOnline
}))
```

This is us telling React: "I want to update the setting object, but I need the latest version of it."
"React gives you the latest version as `prev`"

3. Copying the old object.

`...prev, `

This is the spread operator.
Is like saying: "Copy everything from the old settings object into a new one."

In this case `prev` is:

`{ isOnline: false }`

Therefore `{...prev }` becomes:

`{ isOnline: false }`

Same content, new object. **!IMPORTANT**
React needs this new object so it can detect the change.

4. Overwriting the field you want to change.

`isOnline: !prev.isOnline`

This is the actual update.

Is like saying: "Take the old value of `isOnline`, flip it, and put that into the new object."

So basically:

If it was `false`, it becomes `true`.
If it was `true`, it becomes `false`.

This is the toggle.

5. In plain English:

In plain English:

- “Give me the latest settings object.
- Make a new copy of it.
- Flip the isOnline value.
- Return the new object so React can re-render.”

```jsx
// Full Example:

const [setting, setSettings] = React.useState({
  isOnline: false
})

<Button
onClick={() => {
      setSettings((prev) => ({...prev, isOnline: !prev.isOnline }))
}}
>
</Button>
```

#### How to display `ON` or `OFF` inside `<ValueDisplay>`.

`<ValueDisplay>{settings.isOnline ? 'ON' : 'OFF'}<ValueDisplay>`

This line uses a ternary operator, which is just a compact "if/else".

Think of it like saying:

- If `settings.isOnline` is true, show `ON`.
- Otherwise, show `OFF`.

#### Fixing up mistakes for the future.

- State variable and property are different things, so name them clearly.
- In the line: `const [setting, ...]`, `setting` is the state variable, it represents the entire object.
- But in the line: `React.useState({isOnline: false})`, `isOnline` is a property inside that object, with the value `false`.
- Naming both the state variable and the property `isOnline` is extremely confusing and leads to errors like:
  - `pre.false`
  - `isOnline.true`
  - `isOnline.isOnline` (gross)
  - forgetting which one is the object and which one is the boolean.

Example of the confusing version:

```jsx
const [isOnline, setIsOnline] = React.useState({
  isOnline: false
})
```

- Here:
  - `isOnline` = the object
  - `isOnline.isOnline` = the boolean

This is a naming trap.

- The correct, clean, React‑friendly way is:

```jsx
const [setting, setSettings] = React.useState({
  isOnline: false
})
```

- Now:
  - `settings` = the object
  - `settings.isOnline` = the boolean

Clear. Predictable. No mental gymnastics.

# Exercise 20 - Update Nested Object

============================================================

Up until now, you've only updated flat state:

- a number
- a boolean
- a simple object

This exercise introduces nested state. Now you're updating something else.

```code
state
 └── user
      ├── name
      └── age
```

---

## 1. Step 1

Getting the most updated value with `setState(prev)`.

```jsx
setState((prev) => ({
  ...prev,
  user: {
    ...prev.user,
    age: prev.user.age + 1
  }
}))
```

---

## 2. Step 2

Copy the entire outer object with `...prev`.
`...prev` is basically giving us:

```js
{
      user: { name: 'Javier', age:39 }
}
```

---

## 3. Step 3

Replacing the user object `user: {...}`.
React needs a new reference to detect changes.
This line is like saying: "Hey React, I'm giving you a new user object".

---

## 4. Step 4

Copy the inner object `...prev.user` (meaning the old user).
We haven't change anything so far, we just copied it.

```js
{
  name: "Javier",
  age: 39
}
```

---

## 5. Step 5

Lastly, update one field via `age: prev.user.age + 1`.
Meaning: "Take the old age, add 1 and overwrite the age field."

This gives you:

```js
{
  name: "Javier",
  age: 40
}
```

---

```jsx
// setState((prev) => ({                  // ----------> the most up-to-date state object
//   ...prev,                             // ----------> Copy the OUTER state object
//  user: {                               // ----------> Create a NEW user object
//    ...prev.user,                       // ----------> Copy the INNER user object
//    age: prev.user.age + 1              // ----------> Update the age field
//  }
// }))
```
