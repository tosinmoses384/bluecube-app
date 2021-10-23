import Box from "../../../components/shared/Box";
import { Text } from "../../../components/shared/primitives";
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";
import { justifyContent } from "styled-system";

// type Props = {
//   showLogoutModal: () => void
// }

export const AsideMenuLinks = () =>
  // { showLogoutModal }
  {
    const router = useRouter();
    const { pathname } = router;
    console.log(pathname);

    const getActiveClass = (path) => {
      if (pathname.includes(path)) return "active";
      else return "";
    };

    const handleClick = (path) => {
      router.push(`/layout-folder/${path}`);
    };

    return (
      <Box
        display="flex"
        flexDirection="column"
        //justifyContent="space-between"
        justifyContent="center"
        //height="calc(100% - 120px)"
        minHeight="200px"
        overflowY="scroll"
        //border="1px dashed red"
      >
        <Box width="100%" mt={"50px"} px={"1rem"}>
          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("dashboard")}`}
            onClick={() => {
              console.log("Home");
              handleClick("dashboard");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/home.svg" />
              <Text as="" ml="13px" fontSize="14px">
                Home
              </Text>
            </div>
          </Box>

          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("manage")}`}
            onClick={() => {
              console.log("Manage");
              handleClick("manage");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/investment.svg" />
              <Text as="" ml="13px" fontSize="14px">
                Manage
              </Text>
            </div>
          </Box>
        </Box>

        <div
          style={{
            pointerEvents: "none",
            justifyContent: "center",
          }}
          className={`nav-item`}
        >
          <Text as="p" ml="13px" fontSize="14px" mt="16px" fontWeight="bold">
            SHARE
          </Text>
        </div>

        <Box width="100%" mt={"10px"} px={"1rem"}>
          <Box
            justifyContent="center"
            alignItems="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("ranking")}`}
            onClick={() => {
              console.log("Ranking");
              handleClick("ranking");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/home.svg" />
              <Text as="" ml="13px" fontSize="14px">
                Ranking
              </Text>
            </div>
          </Box>

          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("challenge")}`}
            onClick={() => {
              console.log("Challenge");
              handleClick("challenge");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/investment.svg" />
              <Text as="p" ml="13px" fontSize="14px" mt="16px">
                Challenge
              </Text>
            </div>
          </Box>
          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("party")}`}
            onClick={() => {
              console.log("Party");
              handleClick("party");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/withdrawals.svg" />
              <Text as="p" ml="13px" fontSize="14px" mt="16px">
                Party
              </Text>
            </div>
          </Box>
          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("connect")}`}
            onClick={() => {
              console.log("Connect");
              handleClick("connect");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/funds.svg" />
              <Text as="p" ml="13px" fontSize="14px" mt="16px">
                Connect
              </Text>
            </div>
          </Box>
          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("parade")}`}
            onClick={() => {
              console.log("Parade");
              handleClick("parade");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/beneficiaries.svg" />
              <Text as="p" ml="13px" fontSize="14px" mt="16px">
                Parade
              </Text>
            </div>
          </Box>
          <Box
            justifyContent="center"
            border="1px solid #eaeaea"
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            className={`nav-item ${getActiveClass("group")}`}
            onClick={() => {
              console.log("Group");
              handleClick("group");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
                width: "50%",
              }}
            >
              <SVG src="/media/svg/wm-product/service-request.svg" />
              <Text as="p" ml="13px" fontSize="14px" mt="16px">
                Group
              </Text>
            </div>
          </Box>
        </Box>

        {/* <Box width="100%">
        <div className="separator"></div>
        <Box className="nav-item wrap-text">
          <SVG src="/media/svg/wm-product/settings.svg" />
          <Text as="p" ml="13px" fontSize="14px" mt="16px">
            Settings
          </Text>
        </Box>
        <Box className="nav-item" onClick={showLogoutModal}>
          <SVG src="/media/svg/wm-product/logout.svg" />
          <Text as="p" ml="13px" fontSize="14px" mt="16px">
            Logout
          </Text>
        </Box>
      </Box> */}
      </Box>
    );
  };

export const CollapsedAsideMenuLinks = ({ showLogoutModal }) => {
  const router = useRouter();
  const { pathname } = router;

  const getActiveClass = (path) => {
    if (pathname.includes(path)) return "collapsed-active";
    else return "";
  };

  const handleClick = (path) => {
    router.push(`/layout-folder/${path}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="calc(100% - 120px)"
      minHeight="200px"
      overflowY="scroll"
      //border='1px dashed red'
    >
      <Box width="100%" mt="50px">
        <Box
          className={`nav-item-collapsed ${getActiveClass("dashboard")}`}
          onClick={() => {
            console.log("Home");
            handleClick("dashboard");
          }}
        >
          <SVG src="/media/svg/wm-product/home.svg" />
        </Box>

        <Box
          className={`nav-item-collapsed ${getActiveClass("manage")}`}
          onClick={() => {
            console.log("Manage");
            handleClick("manage");
          }}
        >
          <SVG src="/media/svg/wm-product/investment.svg" />
        </Box>

        <Box
          className={`nav-item-collapsed ${getActiveClass("ranking")}`}
          onClick={() => {
            console.log("Ranking");
            handleClick("ranking");
          }}
        >
          <SVG src="/media/svg/wm-product/withdrawals.svg" />
        </Box>

        <Box
          className={`nav-item-collapsed ${getActiveClass("challenge")}`}
          onClick={() => {
            console.log("Challenge");
            handleClick("challenge");
          }}
        >
          <SVG src="/media/svg/wm-product/funds.svg" />
        </Box>
        <Box
          className={`nav-item-collapsed ${getActiveClass("party")}`}
          onClick={() => {
            console.log("Party");
            handleClick("party");
          }}
        >
          <SVG src="/media/svg/wm-product/beneficiaries.svg" />
        </Box>
        <Box
          className={`nav-item-collapsed ${getActiveClass("connect")}`}
          onClick={() => {
            console.log("Connect");
            handleClick("connect");
          }}
        >
          <SVG src="/media/svg/wm-product/service-request.svg" />
        </Box>
      </Box>

      {/* <Box>
        <div className="separator"></div>
        <Box className="nav-item-collapsed">
          <SVG src="/media/svg/wm-product/settings.svg" />
        </Box>
        <Box className="nav-item-collapsed" onClick={showLogoutModal}>
          <SVG src="/media/svg/wm-product/logout.svg" />
        </Box>
      </Box> */}
    </Box>
  );
};
