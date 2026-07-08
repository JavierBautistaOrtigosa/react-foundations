// Imports

import { useState } from 'react'
import './tw-reset.css'

// App Component
const ProfileEditor = () => {
  // Profile Object
  const initialUser = {
    name: '',
    age: '',
    country: '',
    address: {
      state: '',
      street: '',
      code: ''
    }
  }

  // useState Formula
  const [user, setUser] = useState(initialUser)

  // Handlers
  const resetName = () => {
    setUser((prev) => ({ ...prev, name: initialUser.name }))
  }

  // Load Profile
  const loadProfile = async () => {
    const res = await fetch('http://localhost:3001/profile')
    const data = await res.json()
    setUser(data)
  }

  // Save Profile
  const saveProfile = async () => {
    await fetch('http://localhost:3001/save-profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
  }

  return (
    <div className='tw-reset'>
      <label>
        Name: {user.name}
        <br />
        <input
          value={user.name}
          placeholder='Enter you name...'
          onChange={(e) => {
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }}
        />
        <br />
        <button onClick={resetName}>Reset</button>
        <button onClick={saveProfile}>Save</button>
      </label>
    </div>
  )
}

export default ProfileEditor
