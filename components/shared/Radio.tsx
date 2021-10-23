import { Label } from './primitives'
import Box from './Box'

type RadioProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
}

const Radio: React.FC<RadioProps> = ({ checked, disabled, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={2}>
        <input type="radio" disabled={disabled} checked={checked} />
      </Box>
      <Label color="#3F4254" fontSize={0}>
        {label}
      </Label>
    </Box>
  )
}

export default Radio
