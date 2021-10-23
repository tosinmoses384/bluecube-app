import styled from 'styled-components'
import { base, BaseStyleProps } from '../../styles/baseStyles'

const Textarea = styled.textarea<BaseStyleProps & { width?: any }>`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.borderColor};
  border-radius: 4px;
  flex: 1 0 auto;
  overflow: auto;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.blue};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderColor};
  }

  ${base}
`

Textarea.defaultProps = {
  my: 2,
  p: 2,
  fontSize: 1,
  bg: 'inputBg',
  color: 'inputColor',
  fontWeight: 4,
}

export default Textarea
