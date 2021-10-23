import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from 'axios';
import Layout from "../../modules/layout-folder/components/Layout";
//import DashboardContent from '../../modules/wm-product/dashboard'

import Box from "../../components/shared/Box";
import { Img, Heading, Text } from "../../components/shared/primitives";
import ButtonLink from "../../components/shared/ButtonLink";
import { CustomSelect } from "../../components/shared/CustomSelect";
const API_KEY = process.env.NEXT_PUBLIC_API_URL;

const StyledContainer = styled(Box)`
  display: grid;
  grid-template: 20vh 80vh / 100vw;
  grid-template-areas:
    "inp"
    "img";

  .box-select {
    grid-area: inp;
    //border: 1px dashed red
  }

  .img-select {
    grid-area: img;
  }
`;

const options1 = [
  { value: "world", label: "World" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];

const options2 = [
  { value: "following", label: "Following" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];
const options3 = [
  { value: "popular", label: "Popular" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];
const options4 = [
  { value: "post", label: "Post" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];
const options5 = [
  { value: "gender", label: "Gender" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];
const options6 = [
  { value: "location", label: "Location" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];
const options7 = [
  { value: "profession", label: "Profession" },
  { value: "value-1", label: "label-1" },
  { value: "value-2", label: "label-2" },
  { value: "value-3", label: "label-3" },
];

const DashBoard = () => {

  const [foundImages, setFoundImages] = useState([]);
  const [isFetchingImages, setFetchingImages] = useState(true);

  const [world, setWorld] = useState("World");
  const [following, setFollowing] = useState("Following");
  const [popular, setPopular] = useState("Popular");
  const [post, setPost] = useState("Post");
  const [gender, setGender] = useState("Gender");
  const [location, setLocation] = useState("Location");
  const [profession, setProfession] = useState("Profession");

  const unsplashURL = "https://source.unsplash.com/random/";
  const rows = 5;

  const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 250;
  };

  const getRandomNry = () => {
    return Math.floor(Math.random() * 10) + 300;
  };

  const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNry()}`;
  };

const onSearchSubmit = async (term) => {
    setFetchingImages(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: term },
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        }
      );
      setFoundImages(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setFetchingImages(false);
    }
  };
  console.log(foundImages);

  const data = [
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
    {
      src: `${unsplashURL}${getRandomSize()}`,
    },
  ];
  console.log(data);

  useEffect(() => {
    getRandomSize();
    onSearchSubmit('car');
  }, []);

  

  return (
    <Layout>
      <StyledContainer>
        {/* <Box className='box-select' display="flex" justifyContent="center" alignItems="center"></Box> */}

        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          p={["0.5rem 1rem", "0.5rem 2rem"]}
          //width={["100%", "100%", "100%", "90%"]}
          margin="0 auto"
          className="box-select"
          //border="1px dashed red"
        >
          <Box display="flex">
            <CustomSelect
              showSearch
              placeholder="Select world"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              //mr={[3, 3, 3, 4]}
              value={world}
              onChange={(value) => setWorld(value)}
              options={options1}
            />
            <CustomSelect
              showSearch
              placeholder="Select following"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              value={following}
              onChange={(value) => setFollowing(value)}
              options={options2}
            />
            <CustomSelect
              showSearch
              placeholder="Select popular"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              value={popular}
              onChange={(value) => setPopular(value)}
              options={options3}
            />
            <CustomSelect
              showSearch
              placeholder="Select post"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              value={post}
              onChange={(value) => setPost(value)}
              options={options4}
            />
            <CustomSelect
              showSearch
              placeholder="Select gender"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              value={gender}
              onChange={(value) => setGender(value)}
              options={options5}
            />
            <CustomSelect
              showSearch
              placeholder="Select location"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              value={location}
              onChange={(value) => setLocation(value)}
              options={options6}
            />
            <CustomSelect
              showSearch
              placeholder="Select profession"
              optionFilterProp="children"
              width={["100px", "110px"]}
              height="50px"
              value={profession}
              onChange={(value) => setProfession(value)}
              options={options7}
            />
          </Box>
        </Box>

        <Box
          //border="1px dashed red"
          className="img-select"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          maxWidth="1300px"
          //maxWidth="1500px"
        >
          {data.map((item, index) => {
            const { src } = item;
            return (
              <Box
                objectFit="cover"
                width="250px"
                height="300px"
                maxWidth="100%"
                key={index}
              >
                <Img src={src} />
              </Box>
            );
          })}
        </Box>
      </StyledContainer>
    </Layout>
  );
};

export default DashBoard;
