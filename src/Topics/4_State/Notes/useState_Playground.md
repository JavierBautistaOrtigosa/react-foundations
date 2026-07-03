## “Task Manager Lite”

### useState with Arrays

- You will build a tiny task manager where you can:
  - Add tasks to an array
  - Render the array
  - Remove a task
  - Clear all tasks

> This exercise forces you to repeat the immutable array update pattern until it becomes muscle memory.

#### Your Goal

- Practice these patterns:

`setState((prev) => [...prev, newItem])`
`map()` for rendering.
`filter()` for removing.
`join()` or simple JSX rendering.
Controlled input.
Event handlers.

#### Exercise Requirements

1. State shape

   ```js
   const [tasks, setTasks] = useState([])
   const [input, setInput] = useState('')
   ```

2. Add a task
   - Must use the updater function
   - Must use spread
   - Must trim input before adding

3. Remove a task
   - Must use filter()
   - Remove by index, not by value (junior‑friendly)

4. Clear all tasks
   - Set array back to []

5. Render tasks
   - Use map()
   - Show index + text
   - Add a “remove” button next to each item

#### Your Component Skeleton (You Fill In the Logic)

```jsx
// Skeleton
const TaskManagerLite = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    // TODO: add trimmed input to array using updater function
  }

  const removeTask = (index) => {
    // TODO: remove item using filter
  }

  const clearTasks = () => {
    // TODO: reset array
  }

  return (
    <>
      <input
        value={input}
        onChange={(e) => // TODO: update input}
      />

      <button onClick={addTask}>Add</button>
      <button onClick={clearTasks}>Clear All</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}. {task}
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
</>
  )
}
```

```jsx
import { useState } from 'react'

const TaskManagerLite = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setInput('')
  }

  const removeTask = (index) => {
      setTasks(prev => prev.filter(_, i) => i !== index)
  }

  const clearTasks = () => {
      setTasks([])
  }

return (
      <>
      // Input
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a task' />
      <button onClick={addTask}>Add</button>
      <button onClick={clearTasks}>Clear All</button>

      // Rendering
      <ul>{taks.map((task, index) => (
            <li key={index}>{index + 1}. {task}
            <button onClick={() => removeTask(index)}>X</button>
            </li>
      ))}</ul>
      </>
)

}

export default TaskManagerLite
```
