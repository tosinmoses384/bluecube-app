import { ResponsivePie } from '@nivo/pie'
import { Text } from './primitives'
import Box from './Box'
import styled from 'styled-components'

const StyledBox = styled(Text)`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(210, 215, 219, 1);
  box-shadow: 2px 3px 9px rgba(0, 4, 8, 0.06);
  border-radius: 8px;
  padding: 8px;

  strong {
    font-size: 13px;
  }
`

type ChartProps = {
  data: any[]
  colors: string[]
  total: number
}

const PieChart = ({ data, colors, total }: ChartProps): JSX.Element => {
  return (
    <>
      <ResponsivePie
        data={data}
        margin={{ right: 80, left: 80 }}
        colors={colors}
        enableArcLabels={false}
        innerRadius={0.6}
        padAngle={0.1}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        arcLinkLabel={(d) => `${Number((d.value / total) * 100)}%`}
        tooltip={({ datum: { label, value, color } }) => {
          const val = `${Number((value / total) * 100)}%`
          return (
            <StyledBox>
              <Box height="10px" width="10px" bg={color} mr={2}></Box>
              <Text fontSize={1}>
                {label}: <strong>{val}</strong>
              </Text>
            </StyledBox>
          )
        }}
      />
    </>
  )
}
export default PieChart
