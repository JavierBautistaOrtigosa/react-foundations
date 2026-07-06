import { useState } from 'react'
import './tw-reset.css'

// ---
// Ex04
const UseStateDrills = () => {
  const [user, setUser] = useState({ name: 'Javier', age: 39 })
  const updateAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }))
  }

  return (
    <div className='tw-reset'>
      <button onClick={updateAge}>Update</button>
      <p>
        {user.name} - {user.age}
      </p>
    </div>
  )
}
// ---
// Ex04
// const UseStateDrills = () => {
//   const [user, setUser] = useState({
//     name: 'Javier',
//     age: 39
//   })
//   const updateAge = () => {
//     setUser((prev) => ({ ...prev, age: prev.age + 1 }))
//   }

//   return (
//     <div className='tw-reset'>
//       <button onClick={updateAge}>Update</button>
//       <p>
//         {user.name} - {user.age}
//       </p>
//     </div>
//   )
// }
// ---
// Ex04
// const UseStateDrills = () => {
//   const [name, setName] = useState('Javier')
//   const newName = () => {
//     setName('Daniel')
//   }

//   return (
//     <div className='tw-reset'>
//       <button onClick={newName}>Update</button>
//       <p>{name}</p>
//     </div>
//   )
// }
// ---
// Ex03
// const UseStateDrills = () => {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount((prev) => prev + 1)
//   }

//   return (
//     <div className='tw-reset'>
//       <button onClick={increment}>Increment</button>
//       <p>{count}</p>
//     </div>
//   )
// }
// ---
// Ex02
// const UseStateDrills = () => {
//   const [count, setCount] = useState(0)
//   const handleClick = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div className='tw-reset'>
//       <button onClick={handleClick}>Increment</button>
//       <p>{count}</p>
//     </div>
//   )
// }
// ---
// Ex01
// const UseStateDrills = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div className='tw-reset'>
//       <p>{count}</p>
//     </div>
//   )
// }

export default UseStateDrills
