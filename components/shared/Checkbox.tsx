import Box from './Box'
import styled from 'styled-components'
import { ReactNode } from 'react'

const StyledBox = styled(Box)`
  .container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #002e5a;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 7px;
    height: 11px;
    border: solid white;
    border-radius: 2px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

type CheckBoxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string | ReactNode
  defaultChecked?: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  disabled,
  label,
  defaultChecked,
}) => {
  return (
    <StyledBox>
      <label className="container">
        {label && label}
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
        ></input>
        <span className="checkmark"></span>
      </label>
    </StyledBox>
  )
}

export default CheckBox
