import { useContext, useState, InputHTMLAttributes } from 'react'
import { BaseStyleProps } from '../../styles/baseStyles'
import { ThemeContext } from 'styled-components'
import SVG from 'react-inlinesvg'
import Box from './Box'
import Input, { Adornment } from './Input'

export const PasswordInput: React.FC<
  InputHTMLAttributes<HTMLInputElement> & BaseStyleProps & { as?: any }
> = ({ disabled, ...props }) => {
  const theme = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Box display="flex" alignItems="center" position="relative">
      <Input
        py={2}
        pl={2}
        pr={4}
        disabled={disabled}
        type={open ? 'text' : 'password'}
        {...props}
      />
      <Adornment right="0" pr={2} disabled={disabled}>
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
      </Adornment>
    </Box>
  )
}
