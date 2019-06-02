import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer과 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
// import React, { Component, createContext } from 'react';

// const ColorContext = createContext({ color: 'black' });

// class ColorProvider extends Component {
//   state = {
//     color: 'black',
//     subcolor: 'red'
//   };

//   actions = {
//     setColor: color => {
//       this.setState({ color });
//     },
//     setSubcolor: subcolor => {
//       this.setState({ subcolor });
//     }
//   };

//   render() {
//     const value = {
//       state: this.state,
//       actions: this.actions
//     };
//     return (
//       <ColorContext.Provider value={value}>
//         {this.props.children}
//       </ColorContext.Provider>
//     );
//   }
// }

// // const ColorConsumer = ColorContext.Consumer 과 같은 의미
// const { Consumer: ColorConsumer } = ColorContext;

// // ColorProvider 와 ColorConsumer 내보내기
// export { ColorProvider, ColorConsumer };
// // ColorContext 를 통째로 내보내기
// export default ColorContext;
