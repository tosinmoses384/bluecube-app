import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import { variant } from 'styled-system'
import Box from './Box'
import { Text } from './primitives'
import { BaseStyleProps } from ''
import { ReactNode } from 'react'

export interface AlertProps {
  /**
   * What is the type of the alert?
   */
  type: 'success' | 'error' | 'warning' | 'info'
  /**
   * Alert contents
   */
  label: string | ReactNode
  onClick?: () => void
}

const AlertWrapper = styled(Box)(
  {
    display: 'flex',
    alignItems: 'center',
  },
  variant({
    prop: 'type',
    variants: {
      success: {
        color: 'success',
        borderColor: 'success',
      },
      error: {
        color: 'error',
        border: 'error',
      },
      info: {
        color: 'info',
        border: 'info',
      },
      warning: {
        color: 'warning',
        border: 'warning',
      },
    },
  })
)

AlertWrapper.defaultProps = {
  px: 3,
  py: 4,
  mb: 2,
  height: 5,
  width: '100%',
  borderRadius: 1,
  bg: 'transparent',
  border: 1,
}

const Alert: React.FC<AlertProps & BaseStyleProps> = ({ label, ...props }) => {
  return (
    <AlertWrapper {...props}>
      <SVG src={`/media/svg/${props.type}.svg`} />
      <Text fontSize={'13px'} lineHeight="body" ml={2}>
        {label}
      </Text>
    </AlertWrapper>
  )
}

export default Alert
