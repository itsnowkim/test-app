// import React, { createContext, useState } from 'react';

// const ColorContext = createContext({
//   state: { color: 'black', subcolor: 'red' },
//   actions: {
//     setColor: () => {},
//     setSubcolor: () => {},
//   },
// });

// const ColorProvider = ({ childeren }) => {
//   const [color, setColor] = useState('black');
//   const [subcolor, setSubcolor] = useState('red');

//   const value = {
//     state: { color, subcolor },
//     actions: { setColor, setSubcolor },
//   };
//   return (
//     <ColorContext.Provider value={value}>{childeren}</ColorContext.Provider>
//   );
// };
// const { Consumer: Colorconsumer } = ColorContext;
// export { ColorProvider, Colorconsumer };

// export default ColorContext;

import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;
