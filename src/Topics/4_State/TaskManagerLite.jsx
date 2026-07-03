import { useState } from 'react'
import './tw-reset.css'

const TaskManagerLite = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, trimmed])
    setInput('')
  }

  const removeTask = (index) => {
    setTasks((prev) => prev.toSpliced(index, 1))
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <div className='tw-reset'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a task'
      />

      <br />
      <br />

      <button onClick={addTask}>Add</button>
      <br />
      <button onClick={clearTasks}>Clear All</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}. {task}
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManagerLite
