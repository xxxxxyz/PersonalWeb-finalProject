import React from 'react';

import './styles.scss';

const AnimatedLetters = ({letterClass, strArray, index}) => {
  return (
    <span>
      {strArray.map((letter, i) => (
          <span key={letter + i} className={`${letterClass} _${i + index}`}>
            {letter}
          </span>
          ))}
    </span>
  )
}

export default AnimatedLetters;