# Exercise 20 - Update Nested Object

============================================================

Up until now, you've only updated flat state:

- a number
- a boolean
- a simple object

This exercise introduces nested state. Now you're updating something else.

```code
state
 └── user
      ├── name
      └── age
```

## 1. Step 1

Getting the most updated value with `setState(prev)`.

```jsx
setState((prev) => ({
  ...prev,
  user: {
    ...prev.user,
    age: prev.user.age + 1
  }
}))
```

## 2. Step 2

Copy the entire outer object with `...prev` which is basically giving us:

```js
{
      user: { name: 'Javier', age:39 }
}
```

## 3. Step 3

Replacing the user object `user: {...}`.
React needs a new reference to detect changes.
This line is like saying: "Hey React, I'm giving you a new user object".

## 4. Step 4

Copy the inner object `...prev.user` (meaning the old user).
We haven't change anything so far, we just copied it.

```js
{
  name: "Javier",
  age: 39
}
```

## 5. Step 5

Lastly, update one field via `age: prev.user.age + 1`.
Meaning: "Take the old age, add 1 and overwrite the age field."

This gives you:

```js
{
  name: "Javier",
  age: 40
}
```
