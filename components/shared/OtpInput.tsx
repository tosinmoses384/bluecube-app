import OtpInput from 'react-otp-input'
import { ThemeContext } from 'styled-components'
import { useContext, useState } from 'react'
import Box from './Box'

type OtpProps = {
  numInputs?: number
}

const Otp: React.FC<OtpProps> = ({ numInputs }) => {
  const [otp, setOtp] = useState('')
  const theme = useContext(ThemeContext)
  const { colors } = theme

  const inputStyle = {
    background: colors.inputBg,
    width: '60px',
    height: '60px',
    border: `1px solid ${colors.borderColor}`,
    outline: 'none',
    color: colors.inputColor,
    fontSize: '24px',
    borderRadius: '4px',
  }

  const focusStyle = {
    background: colors.focusStyleBg,
    border: `1px solid ${colors.focusStyleBorderColor}`,
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }

  const handleChange = (otp: string) => setOtp(otp)

  return (
    <Box width="100%" mt={'48px'}>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={numInputs}
        inputStyle={inputStyle}
        shouldAutoFocus={true}
        isInputNum={true}
        focusStyle={focusStyle}
        containerStyle={containerStyle}
      />
    </Box>
  )
}

export default Otp
