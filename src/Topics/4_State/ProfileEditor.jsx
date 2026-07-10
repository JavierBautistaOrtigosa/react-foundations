// Imports
import { useState } from 'react'
import './tw-reset.css'

const ProfileEditor = () => {
  // Profile Object
  const initialUser = {
    name: '',
    age: '',
    address: {
      street: '',
      number: ''
    }
  }

  // useState formula
  const [user, setUser] = useState(initialUser)

  // return
  return (
    // label + input + button
    <div className='tw-reset'>
      <label>
        Name: {user.name} <br />
        <input
          value={user.name}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }}
        />
        <br />
        <button
          onClick={() => {
            setUser((prev) => ({ ...prev, name: initialUser.name }))
          }}
        >
          Reset
        </button>
      </label>
    </div>
  )
}
export default ProfileEditor
