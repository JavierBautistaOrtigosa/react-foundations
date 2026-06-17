# React useState Mastery — 5‑Day Training

A progressive, grind‑friendly program to master state, re-renders, controlled inputs, updater functions, arrays, objects, and patterns.

============================================================

# Day 1 — useState Fundamentals

Master the core mechanics of state, re-renders, and controlled values.

---

## 1. Goal

Build an unshakeable foundation in `useState` by drilling the basics:

- creating state
- reading state
- updating state
- triggering re-renders
- understanding why state exists

---

## 2. Core Idea

State is **component memory**.  
When state changes, **React re-renders** the component.  
Normal variables do not trigger re-renders — only state does.

---

## 3. What You Must Do

Complete the following **micro‑exercises**.  
Each exercise is isolated and focuses on one concept only.  
Each includes a Guided Link to request the solution.

---

## 4. Day 1 Exercises

### Exercise 1 — Basic Counter

Create a component with:

- a number state starting at 0
- a button that increments it

---

### Exercise 2 — Double Increment

Same as Exercise 1, but clicking the button should add **2** instead of 1.

---

### Exercise 3 — Two Independent Counters

Create two counters in the same component:

- each with its own state
- each with its own button

---

### Exercise 4 — Controlled Input

Create a text input whose value is fully controlled by state.

---

### Exercise 5 — Show Typed Text

Extend Exercise 4:

- show the typed text below the input in real time

---

### Exercise 6 — Boolean Toggle

Create a boolean state and a button that toggles it between true/false.

---

### Exercise 7 — Show/Hide Text

Use the boolean from Exercise 6 to conditionally render a `<p>` element.

---

### Exercise 8 — Reset Button

Add a “Reset” button to any previous counter that sets the state back to 0.

---

### Exercise 9 — Disable Button When Count > 5

Add logic so the increment button becomes disabled when count > 5.

---

### Exercise 10 — Two Inputs, One Output

Create two controlled inputs (first name, last name) and display the full name.

---

## 5. What You Should Learn

By the end of Day 1 you must understand:

- how to create state with `useState`
- how React re-renders when state changes
- how controlled inputs work
- how boolean state controls conditional rendering
- how multiple state variables coexist independently

---

## 6. Mental Model

State is **the single source of truth** for anything that changes in the UI.  
When you update state, React:

1. stores the new value
2. re-renders the component
3. updates the DOM based on the new state

Normal variables do not survive re-renders.  
State does.

============================================================

# Day 2 — Updater Functions & Sequential Updates

Master how React batches updates and why updater functions matter.

---

## 1. Goal

Understand how to correctly update state when:

- the next value depends on the previous value
- multiple updates happen in one event
- React batches state updates

---

## 2. Core Idea

When the next state depends on the previous state, you **must** use the updater function:  
`setCount(prev => prev + 1)`  
This guarantees correctness even when React batches updates.

---

## 3. What You Must Do

Complete the following exercises focusing on updater functions and sequential updates.

---

## 4. Day 2 Exercises

### Exercise 1 — Triple Increment

One button click should increase the counter by 3 using **three** updater calls.

---

### Exercise 2 — Increment and Decrement in One Click

One button should:

- increment
- then decrement
- then increment again  
  All using updater functions.

---

### Exercise 3 — Two Counters Updated Together

Two counters in the same component.  
One button updates both using updater functions.

---

### Exercise 4 — Click History Counter

Every click pushes a new number into an array (1, 2, 3...).  
Use updater functions to append correctly.

---

### Exercise 5 — Toggle with Updater

Rewrite a boolean toggle using the updater form:  
`setOn(prev => !prev)`

---

## 5. What You Should Learn

- why updater functions prevent stale state
- how React batches updates
- how to perform multiple updates safely
- how to update arrays using functional updates

---

## 6. Mental Model

React may delay or batch updates.  
If your next value depends on the previous one, you must use the updater function to avoid stale values.

============================================================

# Day 3 — Arrays & Objects in State

Learn how to correctly update complex state structures.

---

## 1. Goal

Become fluent in updating:

- arrays
- objects
- nested structures  
  without mutating them.

---

## 2. Core Idea

State must be treated as **immutable**.  
You never mutate arrays or objects directly.  
You always create new copies.

---

## 3. What You Must Do

Complete exercises focused on immutable updates.

---

## 4. Day 3 Exercises

### Exercise 1 — Add Item to Array

Start with an empty array.  
Add items using the spread operator.

---

### Exercise 2 — Remove Item from Array

Remove an item using `.filter()`.

---

### Exercise 3 — Update an Item in Array

Given an array of objects, update one item immutably.

---

### Exercise 4 — Toggle a Boolean Inside an Object

Given an object `{ on: false }`, toggle it immutably.

---

### Exercise 5 — Update Nested Object

Update a nested field without mutating the original object.

---

## 5. What You Should Learn

- how to update arrays immutably
- how to update objects immutably
- how to update nested structures
- how to avoid accidental mutation

---

## 6. Mental Model

State updates must always create new references.  
Mutation breaks React’s ability to detect changes.

============================================================

# Day 4 — Derived State, Multiple State Variables, Patterns

Learn when to store something in state and when to compute it.

---

## 1. Goal

Understand:

- what should be state
- what should be derived
- how to split or combine state
- how to avoid redundant state

---

## 2. Core Idea

If something can be computed from existing state, it should **not** be stored in state.

---

## 3. What You Must Do

Complete exercises that force you to decide what belongs in state.

---

## 4. Day 4 Exercises

### Exercise 1 — Full Name Derived from First + Last

Store first and last name in state.  
Compute full name on render.

---

### Exercise 2 — Disable Button Based on Input Length

Do not store “isDisabled”.  
Compute it from the input value.

---

### Exercise 3 — Filtered List Derived from Items + Query

Store items and query.  
Compute filtered list.

---

### Exercise 4 — Two Related States (Split or Combine?)

Decide whether to store them separately or as one object.

---

### Exercise 5 — Form Validation Derived from Fields

Compute validation state instead of storing it.

---

## 5. What You Should Learn

- how to avoid redundant state
- how to derive values from existing state
- how to split or combine state variables
- how to keep state minimal and clean

---

## 6. Mental Model

State should be the **minimal** set of data needed to render the UI.  
Everything else should be derived.

============================================================

# Day 5 — Real‑World Patterns & Mini‑Projects

Apply everything in realistic scenarios.

---

## 1. Goal

Combine all previous skills into real components and mini‑projects.

---

## 2. Core Idea

Real components mix:

- multiple state variables
- arrays
- objects
- derived state
- updater functions
- conditional rendering

---

## 3. What You Must Do

Build small components that simulate real UI patterns.

---

## 4. Day 5 Exercises

### Exercise 1 — Todo List (Add, Remove, Toggle)

Use arrays, objects, and updater functions.

---

### Exercise 2 — Form with Validation

Store fields.  
Derive validation.  
Submit only when valid.

---

### Exercise 3 — Shopping Cart Quantity Manager

Increment, decrement, remove items.

---

### Exercise 4 — Light/Dark Theme Toggle

Boolean toggle + conditional rendering.

---

### Exercise 5 — Click History with Derived Stats

Store clicks.  
Derive:

- total
- average time between clicks
- last click

---

## 5. What You Should Learn

- how to combine all state patterns
- how to build real components
- how to structure state cleanly
- how to think like a React developer

---

## 6. Mental Model

Real components are just combinations of:

- state
- derived state
- updater functions
- immutable updates
- conditional rendering

Master these patterns and you can build anything.

============================================================
