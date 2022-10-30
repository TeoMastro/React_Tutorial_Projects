import React, { useState } from 'react';
import './App.css';
import Box from './Box';
import boxes from './boxes';

function App(props) {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on}></Box>
  ));

  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;
