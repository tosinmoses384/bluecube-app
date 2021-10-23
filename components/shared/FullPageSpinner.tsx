import React from 'react'
import { Text } from '../../components/shared/primitives'
import Box from '../../components/shared/Box'

type Props = {
  type?: string
  message?: string
  height?: string
}

const FullPageSpinner: React.FC<Props> = ({ type, message, height }) => {
  return (
    <Box height={height}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={height}
      >
        {message && (
          <Text color="text" fontSize={2}>
            {message}
          </Text>
        )}
        <div className={`spinner-border text-${type} mt-3`}></div>
      </Box>
    </Box>
  )
}

FullPageSpinner.defaultProps = {
  height: '100vh',
}

export default FullPageSpinner
