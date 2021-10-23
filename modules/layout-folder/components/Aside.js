import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Box from "../../../components/shared/Box";
import { Text, Img } from "../../../components/shared/primitives";
import { AsideMenuLinks, CollapsedAsideMenuLinks } from "./AsideMenu";

const StyledText = styled(Text)`
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  margin: 0;
`;

// type TogglerProps = {
//   asideCollapsed: boolean
//   toggleAside: () => void
// }

// type AsideProps = {
//   asideCollapsed: boolean
//   toggleAside: () => void
//   showLogoutModal: () => void
// }

const Toggler = ({ asideCollapsed, toggleAside }) => {
  return (
    <Box
      width="40px"
      height="40px"
      bg="#002E5A"
      position="absolute"
      bottom="60px"
      right="-20px"
      color="#FFF"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="4px"
      onClick={toggleAside}
    >
      <span>
        <i
          className={`las ${
            asideCollapsed ? "la-angle-right" : "la-angle-left"
          }`}
        ></i>
      </span>
    </Box>
  );
};

const Aside = ({
  asideCollapsed,
  toggleAside,
  //showLogoutModal,
}) => {
  const router = useRouter();
  const username = "Albus Dumbledore";

  useEffect(() => {
    router.prefetch("/wm-product/manage-profile");
  }, []);

  return (
    <Box
      height="100%"
      //width={asideCollapsed ? "80px" : "270px"}
      width={asideCollapsed ? "80px" : "330px"}
      position="relative"
      bg="#F6F7F9"
      borderRight="1px solid #DEDBDB"
      className="transition"
    >
      {asideCollapsed ? (
        <Box
          margin="auto"
          width="36px"
          mt="20px"
          height="56px"
          className="username"
          onClick={() => router.push("/layout-folder/manage")}
        >
          <Img src={"/media/images/user-img.png"} />
        </Box>
      ) : (
        <Box
          height="56px"
          //maxWidth="172px"
          maxWidth="14rem"
          margin="auto"
          mt="20px"
          //bg="#002E5A"
          borderRadius="6px"
          display="flex"
          justifyContent="space-around"
          p="10px"
          color="#FFF"
          overflow="hidden"
          className="username"
          onClick={() => router.push("/layout-folder/manage")}
          //border="1px dashed red"
        >

          <Box 
            //border="1px dashed red"
            >
            <Img src={"/media/images/user-img.png"} />
          </Box>
          <Text
            as="h1"
            color="blue"
            fontSize="2rem"
            textAlign="center"
            opacity="0.4"
            m={"0px"}
            fontWeight='900'
          >
            bluecube
          </Text>

          {/* <Box
            border='1px dashed red'
            display="flex"
            flexDirection="column"
            ml="10px"
            className="wrap-text"
          >
            <StyledText title={username} as="p">
              {username}
            </StyledText>
            <Text as="p" fontSize="10px" m={'0px'}>
              Manage Profile
            </Text>
          </Box> */}

          {/* <Box
            border='1px dashed red'
            display="flex"
            flexDirection="column"
            ml="20px"
            fontSize="8px"
            mt="10px"
          >
            <i className="las la-angle-up"></i>
            <i className="las la-angle-down"></i>
          </Box> */}
        </Box>
      )}

      {asideCollapsed ? (
        <CollapsedAsideMenuLinks
        //showLogoutModal={showLogoutModal}
        />
      ) : (
        <AsideMenuLinks
        //showLogoutModal={showLogoutModal}
        />
      )}

      <Toggler  asideCollapsed={asideCollapsed} toggleAside={toggleAside} />
    </Box>
  );
};

export default Aside;
