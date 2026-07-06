import { useState } from 'react'
import './tw-reset.css'

const ProfileEditor = () => {
  const initialProfile = {
    name: 'Javier',
    age: 39,
    isOnline: true,
    address: {
      state: 'WA',
      street: '7 Milfor Pl',
      code: 6061
    }
  }

  const [user, setUser] = useState(initialProfile)

  //   Handlers

  const resetName = () => {
    setUser((prev) => ({ ...prev, name: initialProfile.name }))
  }

  const resetAge = () => {
    setUser((prev) => ({ ...prev, age: initialProfile.age }))
  }

  const resetOnline = () => {
    setUser((prev) => ({ ...prev, isOnline: initialProfile.isOnline }))
  }

  const resetAddressState = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, state: initialProfile.address.state }
    }))
  }

  const resetAddressStreet = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, street: initialProfile.address.street }
    }))
  }

  const resetAddressCode = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, code: initialProfile.address.code }
    }))
  }

  return (
    <div className='tw-reset'>
      <h2>Profile Editor - Intermediate</h2>
      <hr />

      {/* Preview */}

      <h3>Initial Profile State Preview</h3>
      <ul>
        <li>Name: {user.name}</li>
        <li>age: {user.age}</li>
        <li>Online: {user.isOnline ? 'Online' : 'Offline'}</li>
        <li>State: {user.address.state}</li>
        <li>Street: {user.address.street}</li>
        <li>Code: {user.address.code}</li>
      </ul>

      {/* Name */}

      <label>
        Name:
        <br />
        <input
          placeholder='Write a new name...'
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <br />
        <button onClick={resetName}>Reset</button>
      </label>
      <br />

      {/* Age */}

      <label>
        Age:
        <br />
        <input
          value={user.age}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, age: e.target.value }))
          }
        />
        <button onClick={resetAge}>Reset</button>
      </label>
      <br />

      {/* Online */}

      <label>
        Online:
        <br />
        <select
          value={user.isOnline ? 'true' : 'false'}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              isOnline: e.target.value === 'true'
            }))
          }}
        >
          <option value='true'>Online</option>
          <option value='false'>Offline</option>
        </select>
        <button onClick={resetOnline}>Reset</button>
      </label>
      <br />

      {/* Address - State*/}

      <label>
        State:
        <br />
        <select
          value={user.address.state}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, state: e.target.value }
            }))
          }}
        >
          <option value='WA'>WA</option>
          <option value='NSW'>NSW</option>
          <option value='SA'>SA</option>
        </select>
        <button onClick={resetAddressState}>Reset</button>
      </label>
      <br />

      {/* Address - Street */}

      <label>
        Street:
        <br />
        <input
          value={user.address.street}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, street: e.target.value }
            }))
          }}
        />
        <button onClick={resetAddressStreet}>Reset</button>
      </label>
      <br />

      {/* Address - Code */}

      <label>
        Code:
        <br />
        <input
          value={user.address.code}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, code: e.target.value }
            }))
          }}
        />
        <button onClick={resetAddressCode}>Reset</button>
      </label>
    </div>
  )
}

export default ProfileEditor
