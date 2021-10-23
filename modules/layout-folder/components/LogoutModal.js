import { Modal } from 'antd'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { Text } from '../../../components/shared/primitives'
import Box from '../../../components/shared/Box'
import Button from '../../../components/shared/Button'

// type ModalProps = {
//   isModalVisible: boolean
//   handleOk?: () => void
//   handleCancel?: () => void
// }

const StyledText = styled(Text)`
  width: 260px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #002e5a;
  justify-self: center;
  text-align: center;
`

const StyledContent = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
`

const LogoutModal = ({
  isModalVisible,
  handleCancel,
})=> {
  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleCancel}
      closable={false}
      bodyStyle={{ padding: '20px 30px 45px' }}
      footer={null}
    >
      <StyledContent>
        <Box justifySelf="center" mt={4} mb={4}>
          <SVG src="/media/svg/error-warning.svg" />
        </Box>
        <StyledText as="p" mt={2}>
          If you log out, your session will end. Are you sure you want to log
          out?
        </StyledText>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            variant="primary"
            width="187px"
            height="56px"
            m={0}
            mt={4}
            mr={3}
            fontWeight={5}
            onClick={handleCancel}
            color="#002E5A"
            bg="rgba(0, 46, 90, 0.15)"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            width="187px"
            height="56px"
            m={0}
            mt={4}
            fontWeight={5}
            onClick={handleCancel}
            bg="#D9534F"
          >
            Yes, log out
          </Button>
        </Box>
      </StyledContent>
    </Modal>
  )
}

export default LogoutModal
