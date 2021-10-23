import React from 'react'
import styled from 'styled-components'
import { base, 
  //BaseStyleProps as BoxProps 
} from '../../styles/baseStyles'

// export interface ExtraBoxProps {
//   className?: string
//   disabled?: any
//   onClick?: () => void
// }

export const BoxWrapper = styled.div`
  ${base};
`

const Box = ({
  children,
  ...props
}) => <BoxWrapper {...props}>{children}</BoxWrapper>

export default Box
