import React from 'react'
import { useRef } from 'react';

const StorageTest = () => {
    const counterRef = useRef(0);

    function handleClick() {
        counterRef.current++;
        console.log(counterRef.current);
    }

  return (
    <div>StorageTest
            <h3>RefCount: {counterRef.current}</h3>   
            <button  onClick={handleClick}>Neuen Eintrag hinzufügen</button>

    </div>
  )
}

export default StorageTest