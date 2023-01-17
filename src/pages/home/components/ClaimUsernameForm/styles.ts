import { styled } from "../../../../styles"

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    border: '1px solid $gray600',
})

export const Form = styled(Box, {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '$2',
    marginTop: '$4',
    padding: '$4',

    '@media(max-width: 600px)': {
        gridTemplateColumns: '1fr',
    },
})


export const TextInput = styled('input', {
  backgroundColor: '$gray900',
  padding: '0 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  color: '$white',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },

})

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
  
    cursor: 'pointer',
  
    svg: {
      width: '$4',
      height: '$4',
    },
  
    '&:disabled': {
      cursor: 'not-allowed',
    },
  
    variants: {
      variant: {
        primary: {
          color: '$white',
          background: '$ignite500',
  
          '&:not(:disabled):hover': {
            background: '$ignite300',
          },
  
          '&:disabled': {
            backgroundColor: '$gray200',
          },
        },
  
        secondary: {
          color: '$ignite300',
          border: '2px solid $ignite500',
  
          '&:not(:disabled):hover': {
            background: '$ignite500',
            color: '$white',
          },
  
          '&:disabled': {
            color: '$gray200',
            borderColor: '$gray200',
          },
        },
  
        tertiary: {
          color: '$gray100',
  
          '&:not(:disabled):hover': {
            color: '$white',
          },
  
          '&:disabled': {
            color: '$gray600',
          },
        },
      },
  
      size: {
        sm: {
          height: 38,
        },
  
        md: {
          height: 46,
        },
      },
    },
  
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  })
  export const Text = styled('p', {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    color: '$gray100',
  
    variants: {
      size: {
        xxs: { fontSize: '$xxs' },
        xs: { fontSize: '$xs' },
        sm: { fontSize: '$sm' },
        md: { fontSize: '$md' },
        lg: { fontSize: '$lg' },
        xl: { fontSize: '$xl' },
        '2xl': { fontSize: '$2xl' },
        '4xl': { fontSize: '$4xl' },
        '5xl': { fontSize: '$5xl' },
        '6xl': { fontSize: '$6xl' },
        '7xl': { fontSize: '$7xl' },
        '8xl': { fontSize: '$8xl' },
        '9xl': { fontSize: '$9xl' },
      },
    },
  
    defaultVariants: {
      size: 'md',
    },
  })
  
  export const FormAnnotation = styled('div', {
    marginTop: '$2',
  
    [`> ${Text}`]: {
      color: '$gray400',
    },
  })