## "Profile Editor - Intermidiate Version"

0. App Description & Flow:

This app is a small profile‑editing interface where the user can view and update different parts of a profile object. It teaches you how to work with:

- useState with objects
- nested objects
- controlled inputs
- boolean toggles
- immutable update patterns
- reset logic

The component manages a user object and provides UI controls to update specific fields.

1. App Purpose

The purpose of this app is to simulate a real profile editor, where a user can:

- View their profile
- Edit basic fields (name, street, ZIP)
- Toggle online/offline status
- Increment age
- Clean up messy input (trim city)
- Reset everything back to the original profile

This is a realistic pattern used in forms, dashboards, settings pages, and admin panels.

2. State Structure

The app stores a user object with nested fields:

- Basic fields: name, age, city
- Boolean field: isOnline
- Nested object: address.street, address.zip

This structure forces you to practice both flat and nested updates.

3. App Flow (Step‑by‑Step)

Flow 1 — Initial Render

- The component loads.
- initialUser is defined.
- user state is set to initialUser.

The UI displays:

- name, age, city
- online/offline status
- street + ZIP

This is the “profile preview.”

Flow 2 — Editing Name

- User types into the “Name” input.
- onChange fires.
- The new value is read from the event.
- A new user object is created:
- All previous fields copied
- Only name replaced
- React re-renders with the updated name.

Flow 3 — Editing Street

- User types into the “Street” input.
- onChange fires.
- The new street value is read.
- A new user object is created:
- Outer object copied
- Inner address object copied
- Only street replaced
- React re-renders with updated street.

Flow 4 — Editing ZIP

Same flow as street, but updating zip.
This reinforces the nested update pattern.

Flow 5 — Increment Age

- User clicks “Increment Age.”
- Handler runs.
- A new user object is created:
- All fields copied
- age increased by 1
- UI updates with new age.

Flow 6 — Trim City

- User clicks “Trim City.”
- Handler runs.
- A new user object is created:
- All fields copied
- city trimmed
- UI updates with cleaned city.

Flow 7 — Toggle Online Status

- User clicks “Toggle.”
- Handler runs.
- A new user object is created:
- All fields copied
- isOnline flipped from true → false or false → true
- UI updates to show “Online” or “Offline.”

Flow 8 — Reset Profile

- User clicks “Reset Profile.”
- Handler runs.
- user is set back to initialUser.
- All fields revert to their original values.
- UI updates to show the original profile.

4. What You’re Practicing

- Object updates:
  - Updating one field inside an object without mutating the rest.

- Nested object updates
  -Updating address.street and address.zip while preserving the rest of the address.

- Controlled inputs
  -Keeping input values in sync with state.

- Boolean toggles
  -Flipping isOnline using the immutable pattern.

- Reset logic
  -Restoring the entire object from a saved initial version.

- Render flow
  -Understanding how React re-renders after each state update.

5. What You Should Try on Your Own

Follow these steps to rebuild the component:

- Define the initialUser object.
- Create user state using useState(initialUser).
- Render the profile preview.

Add controlled inputs for:

- name
- street
- ZIP

Add handlers for:

- increment age
- trim city
- toggle online
- reset profile
- Add the buttons and wire them to handlers.
- Test each update and confirm the UI changes.

This is the exact flow used in real profile editors.

## “Profile Editor - Easy Version”

### Goal

- Build a tiny profile editor where you can:
  - Update individual fields inside an object
  - Use string methods (toUpperCase, trim)
  - Increment numeric fields
  - Practice the immutable object update pattern

- This exercise forces repetition of:
  - `setState(prev => ({ ...prev, field: newValue }))`
  - Controlled updates
  - Event handlers

### State Shape

```jsx
const [user, setUser] = useState({
  name: 'Javier',
  age: 39,
  city: 'Perth'
})
```

### Uppercase Name

- Requirements:
  - Must use updater function
  - Must use spread
  - Must use `.toUpperCase()`

- Example pattern:

```jsx
setUser((prev) => ({
  ...prev,
  name: prev.name.toUpperCase()
}))
```

### Increment Age

- Requirements:
  - Must use updater function
  - Must use spread
  - Must increment using `prev.age + 1`

- Example pattern:

```jsx
setUser((prev) => ({
  ...prev,
  age: prev.age + 1
}))
```

### Trim City

- Requirements:
  - Must use updater function
  - Must use spread
  - Must use `.trim()`

- Example pattern:

```jsx
setUser((prev) => ({
  ...prev,
  city: prev.city.trim()
}))
```

### Render Profile

- Requirements:
  - Show all fields
  - Keep layout simple

- Example pattern:

```jsx
<p>
  {user.name} — {user.age} — {user.city}
</p>
```

### Notes

- For this section:

```jsx
<label>
  ZIP:
  <br />
  <input
    value={user.address.zip}
    onChange={(e) =>
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, zip: e.target.value }
      }))
    }
  />
</label>
```

- Here is the sequence:

1. Event fires
   - `onChange` event handler runs and receives the event object.

2. Read the new value
   - `e.target.value` grabs the current text inside the input.

3. Call `setUser`
   - `setUser`uses `prev` which is the current `user` object.

4. Spread the outer object.
   - This create a new user object by copying all existing fields.

5. Create a new `address` object.
   - ...prev.address copies all existing address.
   - zip: e.target.value overrides only the zip field with the new value from the input.
