import styled from 'styled-components'
import { base, BaseStyleProps } from '../../styles/baseStyles'

const StyledSelect = styled.select<BaseStyleProps & { width?: any }>`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.borderColor};
  border-radius: 4px;
  flex: 1 0 auto;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.blue};
  }

  &:disabled {
    opacity: 0.25;
    background-color: ${(props) => props.theme.colors.gray};
  }

  ${base}
`

StyledSelect.defaultProps = {
  my: 2,
  p: 2,
  fontSize: 1,
  bg: 'inputBg',
  color: 'inputColor',
  fontWeight: 4,
}

type SelectProps = {
  disabled?: boolean
  value: string
  onChange?: (e?: any) => void
}

export const Select: React.FC<SelectProps & BaseStyleProps & { as?: any }> = ({
  disabled,
  children,
  ...props
}) => (
  <StyledSelect py={2} pr={4} disabled={disabled} {...props}>
    {children}
  </StyledSelect>
)

export default Select
