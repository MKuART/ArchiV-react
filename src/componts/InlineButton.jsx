import React from 'react'
import { useState } from 'react';

const InlineButton = () => {
    const [buttonState, setButtonState] = useState(false);
  return (
    <button style={
        buttonState
        ? {backgroundColor: "red"} : {backgroundColor: "blue"}} onClick={() => setButtonState(!buttonState)}>Inline</button>
  )
}

export default InlineButton