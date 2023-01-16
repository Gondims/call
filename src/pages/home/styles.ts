
import { styled } from "../../styles";

export const Text = styled('p', {
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '160%',
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


export const Heading = styled('h2', {
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '125%',
    margin: 0,
    color: '$gray100',
    variants: {
        size: {
            sm: { fontSize: '$xl' },
            md: { fontSize: '$2xl' },
            lg: { fontSize: '$4xl' },
            '2xl': { fontSize: '$5xl' },
            '3xl': { fontSize: '$6xl' },
            '4xl': { fontSize: '$7xl' },
            '5xl': { fontSize: '$8xl' },
            '6xl': { fontSize: '$9xl' },
        },
    },

    defaultVariants: {
        size: 'md',
    },
})

export const Container = styled('div', {
    maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
    marginLeft: 'auto',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    gap: '$20',
})

export const Hero = styled('div', {
    maxWidth: 480,
    padding: '0 $10',

    [`>${Heading}`]: {
        '@media(max-width: 600px)': {
            fontSize: '$6xl',
        },
    },

    [`>${Text}`]: {
        maskType: '$2',
        color: '$gray200',
    },
})

export const Preview = styled('div', {
    paddingRight: '$8',
    overflow: 'hidden',

    '@media(max-width: 600px)': {
        display: 'none',
    },
})
