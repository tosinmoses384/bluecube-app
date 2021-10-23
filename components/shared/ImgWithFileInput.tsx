import Box from '../../components/shared/Box'
import { Text } from '../../components/shared/primitives'
import styled from 'styled-components'

const StyledText = styled(Text)`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledContainer = styled.div`
  display: flex;
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    height: 104px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    padding: 16px 17px;
    background: rgba(210, 215, 219, 0.25);
    border: 1px dashed #d2d7db;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .inputfile:focus + label,
  .inputfile.has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }

  /* style 3 */
  .inputfile-3 + label {
    color: #b50156;
  }

  .inputfile-3:focus + label,
  .inputfile-3.has-focus + label,
  .inputfile-3 + label:hover {
    color: #722040;
  }
`

type Props = {
  imgUrl: string
  name: string
  imgName: string
  handleChange: (e: any) => void
}

const ImgWithFileInput: React.FC<Props> = ({
  imgUrl,
  name,
  imgName,
  handleChange,
}): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name={name}
          id={name}
          className="inputfile inputfile-3"
          onChange={handleChange}
        />
        <label htmlFor={name}>
          <img height="72px" width="77px" src={imgUrl} />
          <Box
            ml={'26px'}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <StyledText title={imgName} color="#002E5A" fontWeight={6}>
              {imgName}
            </StyledText>
            <Text fontWeight={6} lineHeight={'30px'}>
              Change
            </Text>
          </Box>
        </label>
      </StyledContainer>
    </div>
  )
}

export default ImgWithFileInput
