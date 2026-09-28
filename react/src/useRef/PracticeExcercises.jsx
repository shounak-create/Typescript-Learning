// Exercises
// Build an input with a "Focus" button that focuses the input using useRef (no state involved).

// import React, { useRef } from 'react';

// function PracticeExcercises() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     // e.preventDefault(); 
//     inputRef.current.focus();
//   };

//   return (
//     <form>
//       <input type="text" ref={inputRef} />
//       <button type="button" onClick={handleFocus}>
//         Focus
//       </button>
//     </form>
//   );
// }

// export default PracticeExcercises;


// Build a component that counts how many times it has re-rendered, without causing extra re-renders itself (i.e., use a ref, and display the count somewhere that already re-renders for another reason — like a text input's onChange).

// import React, { useEffect, useRef, useState } from 'react';

// function PracticeExcercises() {
//   const [text,setText] = useState('')
//   const inputRef = useRef(0);

//   inputRef.current +=1

//   return (
//     <div>
//       <input type="text"onChange={(e)=>setText(e.target.value)} value={text} />
//       <p>{inputRef.current}</p>
//     </div>
//   );
// }

// export default PracticeExcercises;

// Implement the usePrevious custom hook above from scratch and use it to show "Score went from X to Y" whenever a score state changes.

import React, { useEffect, useRef, useState } from 'react';

function usePrevious(value){
  const ref = useRef();

  useEffect(()=>{
    ref.current = value
  })
  return ref.current
}

function PracticeExcercises() {
  const [number,setNumber] = useState('')
  const prev = usePrevious(number)
  
  return (
    <div>
        <p>{prev} and {number}</p>
        <button onClick={() => setNumber(s => s + 10)}>+10</button>
        <button onClick={() => setNumber(s => s - 5)}>-5</button>
    </div>
  );
}

export default PracticeExcercises;

// Write a version of a stopwatch (start/stop/reset) that stores the setInterval ID in a ref, and displays elapsed seconds using state.

// import React, { useRef, useState } from 'react';

// function PracticeExcercises() {
//   const [text,setText] = useState('')
//   const inputRef = useRef(0);

//   inputRef.current +=1

//   return (
//     <div>
//       <input type="text"onChange={(e)=>setText(e.target.value)} value={text} />
//       <p>{inputRef.current}</p>
//     </div>
//   );
// }