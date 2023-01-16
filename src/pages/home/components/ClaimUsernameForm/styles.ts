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

export const TextInput = styled('div', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'baseline',

    '&:has(input:focus)': {
        borderColor: '$ignite300',
    },

    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed',
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