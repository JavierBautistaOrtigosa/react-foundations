import ExerciseRunner from './ExerciseRunner'
import TaskManagerLite from './Topics/4_State/TaskManagerLite'

export default function App() {
  return (
    <div className='bg-gray-200 min-h-screen p-10'>
      <h1 className='text-2xl font-bold pl-6 mb-4'>Topic 4_State</h1>
      <ExerciseRunner />
      <TaskManagerLite />
    </div>
  )
}
