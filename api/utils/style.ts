import { createSystem } from 'frog/ui'

export const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(to right, #1E90FF, #87CEFA)',
  backgroundSize: '100% 100%',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  height: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
}

export const textStyle = {
  display: 'flex',
  color: 'white',
  fontSize: 50,
  fontStyle: 'Fantasy',
  letterSpacing: '-0.025em',
  lineHeight: 1.4,
  marginTop: 30,
  padding: '0 120px',
  whiteSpace: 'pre-wrap',
}

export const BORDER_SIMPLE = '1em solid rgb(108,162,255)'
export const BORDER_FAIL = '1em solid rgb(255,24,24)'
export const BORDER_SUCCESS = '1em solid rgb(55,255,24)'

export const { Box, Heading, Text, VStack, vars } = createSystem({
  colors: {
    white: 'white',
    black: 'black',
    custome: '#1F80FF',
    h1Text: 'rgb(255,255,255)',
  },
  fonts: {
    default: [
      {
        name: 'Inter',
        source: 'google',
        weight: 400, 
      },
      {
        name: 'Inter',
        source: 'google',
        weight: 600,
      },
    ],
  },
})
