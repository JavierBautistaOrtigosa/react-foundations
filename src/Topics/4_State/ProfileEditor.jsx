import { useState } from 'react'
import './tw-reset.css'

const ProfileEditor = () => {
  const initialUser = {
    name: '',
    surname: '',
    age: '',
    address: {
      state: '',
      city: '',
      street: '',
      code: ''
    }
  }
  const [user, setUser] = useState(initialUser)

  const resetName = () => {
    setUser((prev) => ({ ...prev, name: initialUser.name }))
  }

  const resetSurname = () => {
    setUser((prev) => ({ ...prev, surname: initialUser.surname }))
  }

  const resetAge = () => {
    setUser((prev) => ({ ...prev, age: initialUser.age }))
  }

  const resetCity = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, city: initialUser.address.city }
    }))
  }

  const resetStreet = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, street: initialUser.address.street }
    }))
  }

  const resetCode = () => {
    setUser((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        code: initialUser.address.code
      }
    }))
  }

  const resetState = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, state: initialUser.address.state }
    }))
  }

  return (
    <div className='tw-reset'>
      {/* Outer Object */}

      {/* Name */}

      <label>
        Name: {user.name}
        <br />
        <input
          placeholder='Type a name...'
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <br />
        <button onClick={resetName}>Reset</button>
      </label>
      <br />
      <br />

      {/* Surname */}

      <label>
        Surname: {user.surname}
        <br />
        <input
          value={user.surname}
          placeholder='Enter your surname...'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              surname: e.target.value
            }))
          }
        />
        <br />
        <button onClick={resetSurname}>Reset</button>
      </label>
      <br />
      <br />

      {/* Age */}

      <label>
        Age: {user.age}
        <br />
        <input
          value={user.age}
          placeholder='Enter your age...'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              age: e.target.value
            }))
          }
        />
        <br />
        <button onClick={resetAge}>Reset</button>
      </label>
      <br />
      <br />

      {/* Address - Inner Object */}

      {/* State */}

      <label>
        State: {user.address.state}
        <br />
        <input
          value={user.address.state}
          placeholder='Enter your state...'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, state: e.target.value }
            }))
          }
        />
        <br />
        <button onClick={resetState}>Reset</button>
      </label>
      <br />
      <br />

      {/* City */}

      <label>
        City: {user.address.city}
        <br />
        <input
          value={user.address.city}
          placeholder='Type your city...'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, city: e.target.value }
            }))
          }
        />
        <br />
        <button onClick={resetCity}>Reset</button>
      </label>
      <br />
      <br />

      {/* Street */}

      <label>
        Street: {user.address.street}
        <br />
        <input
          value={user.address.street}
          placeholder='Type your street'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, street: e.target.value }
            }))
          }
        />
        <br />
        <button onClick={resetStreet}>Reset</button>
      </label>
      <br />
      <br />

      {/* Code */}

      <label>
        Code: {user.address.code}
        <br />
        <input
          value={user.address.code}
          placeholder='Enter your code...'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, code: e.target.value }
            }))
          }
        />
        <br />
        <button onClick={resetCode}>Reset</button>
      </label>
      <br />
      <br />
    </div>
  )
}

export default ProfileEditor
