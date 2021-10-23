import styled from "styled-components";
import Box from "../../../../components/shared/Box";
import { Text } from "../../../../components/shared/primitives";
import { Img } from "../../../../components/shared/primitives";
import { data } from "./data";

const StyledNotificationCard = styled.div`
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //padding-right: 1rem;
    border-top: 1px solid rgba(222, 219, 219, 0.4);
    width: 40px;
    height: 40px !important;
    overflow: scroll;
    border: 1px dashed red;
    .type {
      font-weight: 600;
      font-size: 14px;
      color: #54616c;
      margin-bottom: 2px;
    }
    .desc {
      font-weight: normal;
      font-size: 13px;
      color: #54616c;
    }
    &:first-child {
      border-top: none;
    }
  }
`;

const Index = () => {
  return (
    <StyledNotificationCard>
      {data.map((item) => {
        const { id, type, description, time, icon } = item;
        return (
          <div key={id} className="item">
            <Box display="flex" justifyContent="space-around">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="1rem"
              >
                <Img
                  src={`/media/svg/wm-product/notifications/icon-${icon}.svg`}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                p="1rem"
                pl={0}
              >
                <Text className="type">{type}</Text>
                <Text className="desc">{description}</Text>
              </Box>
            </Box>
            <Box>
              <Text color="#54616c" fontWeight={5}>
                {time}
              </Text>
            </Box>
          </div>
        );
      })}
    </StyledNotificationCard>
  );
};

export default Index;
// import styled from 'styled-components'
// import Box from '../../../../components/shared/Box'
// import { Text } from '../../../../components/shared/primitives'
// import { Img } from '../../../../components/shared/primitives'
// import { data } from './data'

// const StyledNotificationCard = styled(Box)`
//   display: grid;
//   grid-template-rows: 78vh;
//   grid-template-columns: minmax(900px, 1fr);
//   padding: 16px 16px;
//   height: 100%;
//   background: #ffffff;
//   box-sizing: border-box;
//   border: 1px dashed red;
//   .item {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-right: 1rem;
//     border-top: 1px solid rgba(222, 219, 219, 0.4);
//     .type {
//       font-weight: 600;
//       font-size: 14px;
//       color: #54616c;
//       margin-bottom: 2px;
//     }
//     .desc {
//       font-weight: normal;
//       font-size: 13px;
//       color: #54616c;
//     }
//     &:first-child {
//       border-top: none;
//     }
//   }
// `

// const Index = ()=> {
//   return (
//     <StyledNotificationCard>
//       <Box
//         height={'95%'}
//         overflowY="scroll"
//         p={'5px 16px'}
//         border="1px solid rgba(222, 219, 219, 0.4)"
//       >
//         {data.map((item) => {
//           const { id, type, description, time, icon } = item
//           return (
//             <div key={id} className="item">
//               <Box display="flex" justifyContent="space-around">
//                 <Box
//                   display="flex"
//                   justifyContent="center"
//                   alignItems="center"
//                   p="1rem"
//                 >
//                   <Img
//                     src={`/media/svg/wm-product/notifications/icon-${icon}.svg`}
//                   />
//                 </Box>
//                 <Box
//                   display="flex"
//                   justifyContent="center"
//                   flexDirection="column"
//                   p="1rem"
//                   pl={0}
//                 >
//                   <Text className="type">{type}</Text>
//                   <Text className="desc">{description}</Text>
//                 </Box>
//               </Box>
//               <Box>
//                 <Text color="#54616c" fontWeight={5}>
//                   {time}
//                 </Text>
//               </Box>
//             </div>
//           )
//         })}
//       </Box>
//     </StyledNotificationCard>
//   )
// }

// export default Index
