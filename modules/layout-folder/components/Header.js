import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Menu, Dropdown } from "antd";
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "../../../components/shared/Box";
import Input from "../../../components/shared/Input";
import { Img, Heading, Text } from "../../../components/shared/primitives";
import Notifications from "../../layout-folder/components/notifications";
import { data } from "./notifications/data";
//import { width } from "styled-system";

const StyledHeader = styled(Box)`
  .notify {
    cursor: pointer;
    .count {
      border-radius: 50%;
      background-color: #b50156;
      color: #d2d7db;
      font-size: 5px;
      font-weight: 600;
      padding: 5px;
      margin-left: -12px;
    }
  }
`;

// type Props = {
//   asideCollapsed: boolean
// }

const headerText = {
  dashboard: "Dashboard",
  investment: "Investments",
  notifications: "Notifications",
  beneficiaries: "Beneficiaries",
  withdrawals: "Withdrawals",
  payments: "Payments",
  "service-requests": "Service Requests",
  "transaction-history": "Transaction History",
};

const Header = ({ asideCollapsed }) => {
  const [searchValueLength, setSearchValueLength] = useState("");
  const offset = asideCollapsed ? "2%" : "13%";
  const router = useRouter();
  const { pathname } = router;

  const getHeadingText = (pathname) => {
    let path = pathname.split("/");
    path = path[path.length - 1];
    return headerText[path];
  };

  const header = getHeadingText(pathname);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValueLength(e.target.value.trim().length);
  };
  //console.log(searchValueLength);

  const dashboards = (
    <Menu className="mt-3 dropdown">
      {/* <Notifications /> */}

      {data.map((item) => {
        const { id, type, description, time, icon, otherIcon } = item;
        return (
          <Menu.Item
            key={id}
            //key="1"
            onClick={() => {
              console.log("first item - 1");
              //props.setDashboard(1);
            }}
            className="dropdown-menu"
          >
            <div
              //key={id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                //border: "1px dashed red",
              }}
            >
              <Box display="flex" justifyContent="space-around">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="0.5rem"
                >
                  <Img
                    src={`/media/images/user-img.png`}
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  p="0.5rem"
                  pl={0}
                >
                  <Text
                    fontWeight="600"
                    fontSize="14px"
                    color="#54616c"
                    className="type"
                  >
                    {type}
                  </Text>
                  <Text
                    fontWeight="normal"
                    fontSize="13px"
                    color="#54616c"
                    className="desc"
                  >
                    {description}
                  </Text>
                </Box>
              </Box>

              <Box>
                {/* <Text color="#54616c" fontWeight={5}>
                  {time}
                </Text> */}
                <Img
                    src={`/media/svg/info.svg`}
                  />
              </Box>

            </div>
          </Menu.Item>
        );
      })}

      {/* <Menu.Item
        key="1"
        onClick={() => {
          console.log('first item - 1');
          //props.setDashboard(1);
        }}
        className="dropdown-menu"
      >
        <Text
          color="#002e5a"
          fontSize="15px"
          fontWeight="400"
          fontFamily="Inter"
        >
          Dashboard 1
        </Text>

      </Menu.Item>

      <Menu.Item
        key="2"
        className="dropdown-menu"
        onClick={() => {
          console.log('second item - 2');
          //props.setDashboard(2);
        }}
      >
        <Text
          color="#002e5a"
          fontSize="15px"
          fontWeight="400"
          fontFamily="Inter"
        >
          Dashboard 2
        </Text>
      </Menu.Item>

      <Menu.Item
        key="3"
        onClick={() => {
          console.log('third item - 3');
          //props.setDashboard(3);
        }}
        className="dropdown-menu"
      >
        <Text
          color="#002e5a"
          fontSize="15px"
          fontWeight="400"
          fontFamily="Inter"
        >
          Dashboard 3
        </Text>
      </Menu.Item> */}
    </Menu>
  );

  return (
    <StyledHeader
      display="flex"
      height="90px"
      justifyContent="space-between"
      alignItems="center"
      className="sticky header transition"
      width={`calc(100vw - ${offset})`}
      pl={"5%"}
      pr={["13%", "13%", "13%", "8%"]}
      //border="1px dashed red"
    >
      {/* <Heading fontSize="20px" fontWeight={6} m={0} color="#002E5A">
        {header}
      </Heading> */}

      <Box position="relative">
        {searchValueLength < 1 && searchValueLength !== 0 && (
          <button
            style={{
              position: "absolute",
              top: "20px !important",
              left: "10px !important",
              bottom: "0",
              backgroundColor: "#fff",
              border: "0",
              cursor: "pointer",
              width: "15px",
              height: "15px",
            }}
          >
            <i className="las la-search"></i>
          </button>
        )}
        <Input
          onChange={(e) => {
            handleChange(e);
          }}
          //width={["250px", "300px", "366px"]}
          width={"48rem"}
          //width={"100%"}
          height={"48px"}
          //placeholder={"Search"}
          fontSize={1}
          mr={4}
        />

        {searchValueLength < 1 && searchValueLength !== 0 && (
          <h6
            style={{
              fontSize: "10px",
              position: "absolute",
              right: " 10",
              top: "27px",
              left: "40px",
            }}
          >
            Find Something...
          </h6>
        )}
        <button
          style={{
            position: "absolute",
            top: "15px",
            right: "40px",
            backgroundColor: "blue",
            border: "0",
            borderRadius: "3px",
            color: "#fff",
            fontSize: "16px",
            padding: "5px 30px",
          }}
        >
          Search
        </button>
      </Box>

      <Box display="flex" alignItems="center">

        <Dropdown
          overlay={dashboards}
          placement={"bottomRight"}
          trigger={["click"]}
        >
          <Box
            className="notify"
            mr={4}
            //onClick={() => router.push("/wm-product/notifications")}
          >
            <SVG src="/media/svg/notify-icon.svg" />
            <Text className="count">15</Text>
          </Box>
        </Dropdown>

        {/* <div
          className=""
          style={{ width: "5rem" }}
          onClick={() => {
            console.log("it works...");
            // dispatch(clearMessagesAsync(queryParams));
            // router.push("/service-request");
          }}
        >
          ;
          <SVG
            style={{ color: "gold", cursor: "pointer", fontSize: "25px" }}
            src="/media/svg/notify-icon.svg"
          />
          <span
            style={{
              color: "#fff",
              backgroundColor: "red",
              cursor: "pointer",
              //fontSize: "10px",
              borderRadius: "50%",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            {3}
          </span>
        </div> */}

        <Box width={["80px", "90px", "100px"]}>
          <Img src={"/media/images/user-img.png"} />
        </Box>

        <div
          style={{
            //border:'1px dashed red',
            display: "flex",
            cursor:'pointer'
          }}
        >
          <Box
            //display="flex"
            //ml="10px"
            //className="wrap-text"
            pr="0.5rem"
          >
            {/* <Text title={username} as="p">
              Abigail
            </Text> */}
            <Text as="h6" fontSize="10px" m={"0px"}>
              Abigail
            </Text>
          </Box>
          <Box
            //display="flex"
            //flexDirection="column"
            // ml="20px"
            fontSize="8px"
            // mt="10px"
          >
            {/* <i className="las la-angle-up"></i> */}
            <i className="las la-angle-down"></i>
          </Box>
        </div>
      </Box>
    </StyledHeader>
  );
};

export default Header;
