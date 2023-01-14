import { createGlobalStyle } from 'styled-components';
import { createStitches } from '@stitches/react';

export const { getCssText } = createStitches();

export const GlobalStyle = createGlobalStyle ({
    '*': {
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
    },
  
    body: {
      backgroundColor: '#121214',
      color: '#E1E1E6',
      '-webkit-font-smoothing': 'antialiased',
    },
  })

  export default GlobalStyle;