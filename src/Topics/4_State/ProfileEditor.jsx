import { useState } from 'react'
import './tw-reset.css'

const ProfileEditor = () => {
  const initialUser = {
    name: '',
    age: '',
    gender: '',
    isOnline: true,
    address: {
      country: 'Australia',
      state: 'WA',
      city: 'Nollamara'
    }
  }

  const [user, setUser] = useState(initialUser)

  //   Reset Handlers:

  //   Name:

  const resetName = () => {
    setUser((prev) => ({ ...prev, name: initialUser.name }))
  }

  // Age:

  const resetAge = () => {
    setUser((prev) => ({ ...prev, age: initialUser.age }))
  }

  // Gender:

  const resetGender = () => {
    setUser((prev) => ({ ...prev, gender: initialUser.gender }))
  }

  return (
    <div className='tw-reset'>
      {/* Name Field */}
      <label>
        Name: {user.name}
        <br />
        <input
          placeholder='Type new name...'
          value={user.name}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }}
        />
        <br />
        <button
        // Code to save the name
        >
          Save
        </button>
        <br />
        <button onClick={resetName}>Reset</button>
      </label>
      <hr />

      {/* Age Field */}
      <label>
        Age: {user.age}
        <br />
        <input
          placeholder='Enter user age'
          value={user.age}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, age: e.target.value }))
          }}
        />
        <br />
        <button>Save</button>
        <br />
        <button onClick={resetAge}>Reset</button>
      </label>
      <hr />

      {/* Gender Field */}

      <label>
        Gender: {user.gender}
        <br />
        <input
          placeholder='Male or Female'
          value={user.gender}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, gender: e.target.value }))
          }}
        />
        <br />
        <button>Save</button>
        <br />
        <button onClick={resetGender}>Reset</button>
      </label>
    </div>
  )
}

export default ProfileEditor
