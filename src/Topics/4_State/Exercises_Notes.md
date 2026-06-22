# React useState Mastery - Notes

Notes, advise and formulas to remember and refresh React concepts.

============================================================

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

### Exercise 15 - Toggle with updater

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
