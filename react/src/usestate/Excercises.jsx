// Build a counter component with Increment, Decrement, and Reset buttons.
import React, { useState } from 'react'

function Excercises() {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Excercises


// Build a component where clicking one button calls setCount(count + 1) three times in a row. Log the result and explain why it doesn't increase by 3. Then fix it using the functional update form.


// Create a useState for a form object { name: "", email: "" } with two text inputs, updating only the relevant field on each keystroke without wiping the other field.


// Use lazy initialization to seed state from localStorage (e.g., a theme value), so the read only happens once.