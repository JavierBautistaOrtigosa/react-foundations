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
