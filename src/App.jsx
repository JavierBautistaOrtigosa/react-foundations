import ExerciseRunner from './ExerciseRunner'
import TaskManagerLite from './Topics/4_State/TaskManagerLite'
import UseStateDrills from './Topics/4_State/UseStateDrills'
import ProfileEditor from './Topics/4_State/ProfileEditor'

export default function App() {
  return (
    <div className='bg-gray-200 min-h-screen p-10'>
      <h1 className='text-2xl font-bold pl-6 mb-4'>Topic 4_State</h1>
      {/* <ExerciseRunner /> */}
      {/* <TaskManagerLite /> */}
      {/* <UseStateDrills /> */}
      <ProfileEditor />
    </div>
  )
}
