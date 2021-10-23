import React from 'react'
import { variant } from 'styled-system'
import styled from 'styled-components'
import Link from 'next/link'
import { base, 
  //BaseStyleProps 
} from '../../styles/baseStyles'

// export interface StyledLinkProps {
//   /**
//    * What is the type of the button?
//    */
//   variant: 'primary' | 'secondary' | 'ghost' | 'outline'
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void
//   disabled?: any
// }

const StyledLink = styled('a')(
  
  {
    border: 0,
    outline: 0,
    textAlign: 'center',
    lineHeight: 1.5,
    verticalAlign: 'middle',
    textDecoration: 'none',
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

StyledLink.defaultProps = {
  p: 2,
  borderRadius: 3,
  display: 'inline-block',
}

/**
 * Primary UI component for user interaction
 */
const ButtonLink = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <StyledLink {...props}>{children}</StyledLink>
    </Link>
  )
}

export default ButtonLink
