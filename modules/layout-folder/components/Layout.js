import React, { 
  //ReactNode, 
  useState } from 'react'
import Box from '../../../components/shared/Box'
import Aside from './Aside'
import Header from './Header'
import styled from 'styled-components'
import Notifications from '../../layout-folder/components/notifications'
//import LogoutModal from './LogoutModal'

const StyledMain = styled(Box)`
  .header {
    z-index: 10;
    background-color: rgba(246, 248, 249, 1);
  }

  .sticky {
    position: fixed;
    top: 0;
  }

  .sticky + .cont {
    transition: all 0.5s ease;
    padding-top: 100px;
    padding-bottom: 15px;
    /* background-color: #F9F9FB; */

    @media (max-width: 1200px) {
      margin: 0 auto;
    }
  }
`

// type LayoutProps = {
//   children: ReactNode
// }

const Layout = ({ children })=> {
  //const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)
  const [asideCollapsed, setAsideCollapsed] = useState(false)

  const toggleAside = () => {
    setAsideCollapsed(!asideCollapsed)
  }

  // const showLogoutModal = () => {
  //   setIsLogoutModalVisible(true)
  // }

  // const closeLogoutModal = () => {
  //   setIsLogoutModalVisible(false)
  // }

  return (
    <>

      {/* <LogoutModal
        isModalVisible={isLogoutModalVisible}
        handleCancel={closeLogoutModal}
      /> */}

      <Box
        height="100vh"
        width="100%"
        display="flex"
        fontFamily="Inter"
        bg="rgba(246, 248, 249, 1)"
        //position='relative'
      >
        <Aside
          asideCollapsed={asideCollapsed}
          toggleAside={toggleAside}
          //showLogoutModal={showLogoutModal}
        />
        <StyledMain
          display="flex"
          width="100%"
          bg="#E5E5E5"
          height="100%"
          py={'18px'}
          flexDirection="column"
          overflowY="scroll"
        >
          <div className="sticky header">
            <Header asideCollapsed={asideCollapsed} />
          </div>
          <Box className="cont" pl={'5%'} pr={'4%'}>
            {children}
          </Box>
        </StyledMain>

        {/* <Notifications  
          //style={{ position:'absolute', top:'0', right:'0', height:'40px', border: '1px dashed red' }} 
          /> */}

      </Box>

    </>
  )
}

export default Layout
