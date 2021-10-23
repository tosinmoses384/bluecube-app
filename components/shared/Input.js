//import { ReactNode, FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { base, 
  //BaseStyleProps 
} from '../../styles/baseStyles'
import Box from './Box'

// interface AdorementProps {
//   disabled?: boolean
// }

export const Adornment = styled.div`
  position: absolute;
  opacity: ${(props) => (props.disabled ? 0.25 : 1)};
  ${base}
`

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors?.borderColor};
  border-radius: 4px;
  flex: 1 0 auto;
  padding: 8px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors?.blue};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors?.disabled};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors?.placeholderColor};
  }

  ${base}
`

export const HtmlInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  display: 'inline-block';
  vertical-align: 'middle';
  appearance: 'none';
  flex: 1 0 auto;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.blue};
  }

  &:disabled {
    opacity: 0.25;
    background-color: ${(props) => props.theme.colors.gray};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderColor};
  }

  ${base}
`

Input.defaultProps = {
  my: 2,
  fontSize: 1,
  bg: 'inputBg',
  color: 'inputColor',
  fontWeight: 4,
}

// interface InputWithAdornmentProps
//   extends InputHTMLAttributes<HTMLInputElement> {
//   before?: ReactNode
//   after?: ReactNode
// }

export const InputWithAdornment = ({ before, after, disabled, ...props }) => (
  <Box display="flex" alignItems="center" position="relative">
    {before && (
      <Adornment left="0" pl={2} disabled={disabled}>
        {before}
      </Adornment>
    )}
    <Input
      disabled={disabled}
      py={2}
      pl={before ? '22px' : 2}
      pr={after ? '22px' : 2}
      {...props}
    />
    {after && (
      <Adornment right="0" pr={2} disabled={disabled}>
        {after}
      </Adornment>
    )}
  </Box>
)

export default Input
