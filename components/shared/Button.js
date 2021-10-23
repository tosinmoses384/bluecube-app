//import { FC, ButtonHTMLAttributes } from 'react'
import { variant } from 'styled-system'
import styled from 'styled-components'
import { base, 
  //BaseStyleProps 
} from '../../styles/baseStyles'

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   /** What is the type of the button? */
//   variant: 'primary' | 'secondary' | 'ghost' | 'outline'
// }

const StyledButton = styled('button')(
  {
    border: 0,
    outline: 0,
    fontFamily: 'inherit',
    ':disabled': {
      opacity: 0.8,
      cursor: 'not-allowed',
    },
  },
  variant({
    variants: {
      primary: {
        color: 'primaryButtonText',
        bg: 'primaryButtonBg',
      },
      secondary: {
        color: 'secondaryButtonText',
        bg: 'secondaryButtonBg',
      },
      ghost: {
        color: 'primaryButtonText',
        bg: 'transparent',
      },
      outline: {
        border: 1,
        color: 'primaryButtonText',
        bg: 'transparent',
        borderColor: 'gray',
      },
    },
  }),

  base
)

StyledButton.defaultProps = {
  p: 2,
  height: 5,
  borderRadius: 3,
  display: 'inline-block',
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  children,
  ...props
}) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
