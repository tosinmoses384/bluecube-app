import { useRouter } from 'next/router'
import styled from 'styled-components'
import Box from '../../components/shared/Box'
import { Text } from '../../components/shared/primitives'
import { useEffect, useState } from 'react'

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  height: 50px;
  width: 90vw;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      color: #ffffff;
      background-color: #002e5a;
      text-align: center;
      border-radius: 50%;
      margin-right: 16px;
      padding: 2px;
    }

    .label {
      font-size: 14px;
    }

    .line {
      width: 30px;
      height: 1px;
      background-color: #002e5a;
      margin: 0 16px;
    }

    &:last-child {
      .line {
        display: none;
      }
    }
  }
`

type Step = {
  id: string
  slug: string
  text: string
  active: boolean
}

export interface ProgressBarProps {
  /**
   * array of the step objects
   */
  initialSteps: Step[]
  /**
   * base url for the step
   */
  baseUrl: string
}

export default function ProgressBar({
  initialSteps,
  baseUrl,
}: ProgressBarProps): JSX.Element {
  const [steps, setSteps] = useState(initialSteps)
  const router = useRouter()
  const { page } = router.query

  useEffect(() => {
    const updateSteps = () => {
      const currentIndex = steps.findIndex(({ slug }) => slug === page)
      const _steps = steps.map((step, index) => ({
        ...step,
        active: index <= currentIndex,
      }))
      setSteps(_steps)
    }
    updateSteps()
  }, [page])

  return (
    <StyledContainer>
      {steps.map(({ id, slug, text, active }) => {
        const link = `/${baseUrl}/${slug}`
        return (
          <div
            onClick={() => router.push(link)}
            key={id}
            className="item"
            style={!active ? { pointerEvents: 'none', opacity: '0.4' } : {}}
          >
            <Box className="circle">{id}</Box>
            <Text className="label">{text}</Text>
            <Box className="line"></Box>
          </div>
        )
      })}
    </StyledContainer>
  )
}
