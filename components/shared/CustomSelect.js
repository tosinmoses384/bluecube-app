import styled from 'styled-components'
import { Select, SelectProps } from 'antd'
import { base, 
  //BaseStyleProps as BoxProps 
} from '../../styles/baseStyles'

const { Option } = Select

const StyledSelect = styled(Select)`
  position: relative !important;
  .ant-select-selector {
    font-family: ${(props) => props.theme.fonts?.body};
    width: 100%;
    height: 100% !important;
    display: flex;
    align-items: center;
    box-shadow: none !important;
    border-radius: 4px !important;
    color: #002e5a !important;
    font-size: 14px !important;
    outline: none;

    .ant-select-selection-placeholder {
      color: ${(props) => props.theme.colors?.placeholderColor};
      font-weight: 400;
    }
  }
  ${base}
`

StyledSelect.defaultProps = {
  my: 2,
  fontWeight: 4,
}

export const CustomSelect = ({ options, ...props }) => (
  <StyledSelect {...props}>
    {options.map(({ value, label }) => (
      <Option key={value} value={value}>
        {label}
      </Option>
    ))}
  </StyledSelect>
)
