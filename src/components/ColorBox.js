// import React from 'react';
// import { Colorconsumer } from '../contexts/color';

// const ColorBox = () => {
//   return (
//     <Colorconsumer>
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: state.color,
//             }}
//           />
//           <div
//             style={{
//               width: '32px',
//               height: '32px',
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </Colorconsumer>
//   );
// };

// export default ColorBox;

import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: '64px', height: '64px', background: value.color }}
        />
      )}
    </ColorContext.Consumer>
  );
};
export default ColorBox;
