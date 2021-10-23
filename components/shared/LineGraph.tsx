import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import Box from '../shared/Box'
import { Text } from '../shared/primitives'
import styled from 'styled-components'

const StyledBox = styled(Text)`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(210, 215, 219, 1);
  box-shadow: 2px 3px 9px rgba(0, 4, 8, 0.06);
  border-radius: 4px;
  padding: 4px;
`

type ChartProps = {
  data: any[]
  colors: string[]
}
const lineGraphSettings = {
  theme: {
    fontSize: 12,
    textColor: '#000000',
    fontFamily: 'IBM Plex Mono',
  },
}

const LineChart = ({ data, colors }: ChartProps): JSX.Element => {
  return (
    <ResponsiveLine
      data={data}
      curve="monotoneX"
      colors={colors}
      enablePoints={false}
      theme={lineGraphSettings.theme}
      enableGridX={false}
      margin={{ right: 30, left: 50, top: 5, bottom: 40 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 2000,
        max: 6500,
        stacked: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      useMesh={false}
      tooltip={({ point: { color, data } }) => {
        return (
          <StyledBox>
            <Box height="10px" width="10px" bg={color} mr={2}></Box>
            <Text color="#000" fontSize={0}>
              {data.x}: <Text fontWeight={600}>{data.y}</Text>
            </Text>
          </StyledBox>
        )
      }}
    />
  )
}

export default LineChart
