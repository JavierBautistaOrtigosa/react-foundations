## Methods with useState

### map()

`map()` creates a **new array** by transforming each item in the original array.

- When do we use it?
- Rendering lists in React.
- Converting data in JSX
- Transforming arrays(ex: numbers -> strings, objects -> components)

- Why is it important?
- Because React litarally depends on it.
- Every list you render uses `map()`
- Mastering `map()`, is like mastering 50% of React UI logic.

- Anatomy:

```js
array.map((item) => {
      return something
})
```

- Core patterns:
- Tranform items:

```jsx
nums.map((n) => n * 2)
```

- Render JSX:

```jsx
items.map((item) => <li>{item}</li>)
```

- Extract fields:

```jsx
users.map((u) => u.name)
```

- Add new fields:

```jsx
users.map((u) => ({ ...u, active: true }))
```

### filter()

`filter()` returns a **new array** containing only items that match a condition.

- When do we use it?
- Search bars
- Filtering lists
- Showing only items that match user input
- Removing items
- Derived state in React

- Why is it important?
- Because filtering + mapping **= real UI logic**.
- Search bars, product lists, dashboards all use `filter()`.

- Anatomy:

```jsx
array.filter((item) => {
      return condition
})
```

- Core patterns:
- Filter by text:

```jsx
items.filter((item) => item.includes(query))
```

- Case-insensitive:

```jsx
items.filter((item) => item.toLowerCase().includes(query.toLowerCase())
```

- Filter objects:

```jsx
users.filter((u) => u.active)
```

- Filter multiple conditions:

```jsx
users.filter((u) => u.age > 18 && u.active)
```

### includes()

`includes()` checks if a string or array **contains** something.

- String version:
- `'apple'.includes('app') // true`

- Array version:
- `[1,2,3].includes(2) // true`

- When do we use it?
- Search logic
- Checking if a value exists
- Quick membership checks
- Filtering lists

- Why is it important?
- Because **every search bar** uses `includes()`.
- It's the simplest way to check if the text matches a query.

- Anatomy:

```js
string.includes(substring)
array.includes(value)
```

- Core patterns:
- Search:

```js
item.includes(query)
```

- Case-insensitive:

```js
item.toLowerCase().includes(query.toLowerCase())
```

- Check membership:

```js
selected.includes(id)
```

### join()

`join()` converts an array into a **single string**, separated by whatever you choose.

- Example:
- `['a','b','c'].join(', ')`

- Result:
- `"a, b, c"`

- When do we use it?
- Displaying aarays in React.
- Debugging.
- Creating readable output.
- Converting arrays into strings.

- Why is it important?
- Because React cannot render arrays directly as text.
- `join()` makes arrays readable.

- Anatomy:

```js
array.join(separator)
```

- Core patterns:
- Readable list:

```js
items.join(', ')
```

- No separator:

```js
items.join('')
```

- Custom formatting:

```js
items.join(' | ')
```

### toUpperCase()

`toUpperCase()` converts a string to **ALL CAPS**.

- Example:
- `'apple'.toUpperCase() // 'APPLE'`

- When do we use it?
- Normalizing text.
- Case-insensitive search.
- Formatting UI labels.
- Comparing strings.

- Why is it important?
- Because search logic must be **case-insensitive.**
- You normalize both sides -> compare -> get correct results.

- Anatomy:

```js
string.toUpperCase()
```

- Core patterns:
- Normalize search

```js
string.toUpperCase().includes(query.toUpperCase())
```

- Format UI

```js
title.toUpperCase()
```

- Compare strings

```js
if (a.toUpperCase() === b.toUperCase()) {...}
```

### toLowerCase()

`toLowerCase` converts a string to **lowercase.**

- When do we use it?
- Case-insensitive search.
- Normalizing user input.
- Comparing strings safely.

- Why is it important?
- Search must ignore uppercase/lowecase.
- Makes filtering predictable.

- Anatomy:

```js
string.toLowerCase()
```

- Core patterns:
- Normalize search:

```js
item.toLowerCase().includes(query.toLowerCase())
```

- Normalize input:

```js
setQuery(e.target.value.toLowerCase())
```

- Compare strings:

```js
if (a.toLowerCase() === b.toLowerCase()) {...}
```

### find()

`find()` returns the **first item** that matches a condition.

- When do we use it?
- CRUD logic.
- Finding a track by id.
- Getting a single object from a list.

- Why is it important?
- Used constantly in favorites, cart systems, user lookup.
- Cleaner than filter when you only need one item.

- Anatomy:

```js
array.find((item) => {
      return condition
})
```

- Core patterns:
- Find by id:

```js
users.find((u) => u.id === 3)
```

- Find by name:

```js
tracks.find((t) => t.name === 'Hello')
```

- Find first match:

```js
nums.find((n) => n > 10)
```

### some()

`some()` checks is at least on item in an array matches a condition.

- When do we use it?
- Validation logic.
- UI toggles ("show badge if any item is popular").
- Checking if any item meets a requirement.
- Quick boolean checks in lists.

- Why is it important?
- Perfect for "does anything match" logic?
- Used in forms, favourites, filters, and stats.
- Cleaner than writing manual loops.

- Anatomy:

```js
array.some((item) => {
      return condition
})
```

- Core patterns:
- Any track above popularity 80:

```js
tracks.some((t) => t.popularity > 80)
```

- Any favourite matches this id:

```js
favourites.some((f) => f.id === track.id)
```

- Any negative number:

```js
nums.some((n) => n < 0)
```

### every()

`every()` checks if all items in an array match a condition.

- When do we use it?
- Form validation ("all fields filled?").
- Multi-select logic.
- Checking consistency across items.
- Ensuring all items meet a rule.

- Why is it important?
- Perfect for "are all valid" logic.
- Used in forms, filters, and stats.
- Help create predictable UI behaviour.

- Anatomy:

```js
array.every((item) => {
return condition
})
```

- Core patterns:
- All favorites from the same artist

```js
favorites.every(f => f.artist === favorites[0].artist)
All numbers positive
```

- All numbers positive:

```js
nums.every(n => n > 0)
All tracks explicit
```

- All tracks explicit:

```js
tracks.every((t) => t.explicit)
```

### reduce()

`reduce()` combines all items in an array into one single value.

- When do we use it?
- Totals (duration, price, popularity).
- Counts.
- Analytics.
- Derived values (averages, sums).

- Why is it important?
- Essential for dashboards, stats, summaries.
- Lets you compute values from lists cleanly.
- Used heavily in data‑driven React apps.

- Anatomy:

```js
array.reduce((acc, item) => {
      return acc + something
}, initialValue)
```

- Core patterns:
- Sum numbers:

```js
nums.reduce((acc, n) => acc + n, 0)
Total duration of tracks
```

- Total duration of tracks:

```js
tracks.reduce((acc, t) => acc + t.duration_ms, 0)
Average popularity
```

- Average popularity:

```js
tracks.reduce((acc, t) => acc + t.popularity, 0) / tracks.length
```

### trim()

`trim()` removes whitespace from the start and end of a string.

- When do we use it?
- Cleaning user input.
- Search bars.
- Form validation.
- Preventing accidental empty submissions.

- Why is it important?
- Prevents bugs caused by extra spaces.
- Makes search and validation more reliable.
- Essential for controlled inputs.

- Anatomy:

```js
string.trim()
```

- Core patterns:
- Clean search input:

```js
setQuery(e.target.value.trim())
Clean form fields
```

- Clean form fields:

```js
const name = input.trim()
```

- Prevent empty-space submissions:

```js
if (query.trim() === '') return
```

### Methods Index:

#### Array Methods Used Constantly in React:

These are the React essentials. If you master these, you can build 80% of UI logic.

- Core React Array Methods:
- map() — render lists, transform data
- filter() — search, remove items, conditional UI
- find() — get a single item (e.g., find user by id)
- findIndex() — locate item position for updates
- some() — check if any item matches
- every() — check if all items match
- reduce() — totals, counts, aggregations
- sort() — sorting lists (products, users, etc.)
- slice() — pagination, immutability
- concat() — immutable array updates
- flat() — flatten nested arrays
- flatMap() — map + flatten in one step

#### String Methods Used Constantly in React

These power search bars, filters, validation, formatting, and UI text.

- Core React String Methods
- toLowerCase() — case‑insensitive search
- toUpperCase() — formatting, normalization
- trim() — clean user input
- includes() — search logic
- startsWith() — prefix matching
- endsWith() — suffix matching
- split() — convert string → array
- replace() — formatting, sanitizing
- replaceAll() — clean multiple occurrences

React uses strings everywhere — inputs, labels, search, validation — so these matter.

#### Object Methods Used Constantly in React

React state is often objects, so these matter for immutable updates.

- Core React Object Methods
- Object.keys() — get field names
- Object.values() — get field values
- Object.entries() — iterate key/value pairs
- Object.assign() — immutable updates
- structuredClone() — deep copy objects

These are essential for updating nested state without mutation.

#### Number & Math Methods Used Often in React

Used for counters, pagination, UI calculations, animations, charts.

- Core React Number/Math Methods
- parseInt() — convert input → number
- parseFloat() — convert input → decimal
- Math.round() — rounding
- Math.floor() — pagination
- Math.ceil() — pagination
- Math.max() — find largest
- Math.min() — find smallest

#### JSON Methods Used Constantly in React

Especially when working with APIs.

- Core JSON Methods
- JSON.parse() — convert JSON → JS
- JSON.stringify() — convert JS → JSON
- React apps talk to APIs all the time — these are essential.

#### Utility Methods Used Everywhere

These aren’t array/string methods but are used constantly.

- Core Utility Methods
- setTimeout() — delays, debounce
- setInterval() — timers
- clearTimeout() — cancel timers
- clearInterval() — cancel intervals
