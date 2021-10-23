import { useContext, useState } from 'react'
import { BaseStyleProps } from '../../styles/baseStyles'
import { ThemeContext } from 'styled-components'
import SVG from 'react-inlinesvg'
import Box from './Box'

interface HidableTextProps {
  text: any
}

export const HidableText: React.FC<BaseStyleProps & HidableTextProps> = ({
  text,
  ...props
}) => {
  const theme = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((prev) => !prev)
  }

  const { children, ...otherProps } = text?.props
  const hiddenText =
    typeof text === 'string'
      ? text.split('').reduce((acc) => `${acc}*`, '')
      : children.split('').reduce((acc) => `${acc}*`, '')

  return (
    <Box display="flex" alignItems="center">
      {open && (
        <Box>
          {typeof text === 'string' ? <Box {...props}>{text}</Box> : text}
        </Box>
      )}
      {!open && (
        <Box {...props} {...otherProps}>
          {hiddenText}
        </Box>
      )}
      <Box>
        {open ? (
          <SVG
            onClick={toggle}
            src={`/media/svg/eye-open.svg`}
            cursor="pointer"
          />
        ) : (
          <SVG
            onClick={toggle}
            src={`/media/svg/eye-closed-${theme.mode}.svg`}
            cursor="pointer"
          />
        )}
      </Box>
    </Box>
  )
}
