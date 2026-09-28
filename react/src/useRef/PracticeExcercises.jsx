// Exercises
// Build an input with a "Focus" button that focuses the input using useRef (no state involved).

import React, { useRef } from 'react';

function PracticeExcercises() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // e.preventDefault(); 
    inputRef.current.focus();
  };

  return (
    <form>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleFocus}>
        Focus
      </button>
    </form>
  );
}

export default PracticeExcercises;


// Build a component that counts how many times it has re-rendered, without causing extra re-renders itself (i.e., use a ref, and display the count somewhere that already re-renders for another reason — like a text input's onChange).


// Implement the usePrevious custom hook above from scratch and use it to show "Score went from X to Y" whenever a score state changes.


// Write a version of a stopwatch (start/stop/reset) that stores the setInterval ID in a ref, and displays elapsed seconds using state.