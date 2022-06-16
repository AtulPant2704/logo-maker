import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Heading, GridItem } from "@chakra-ui/react";
import { useLogo } from "context";

const FontCard = ({ family }) => {
  const navigate = useNavigate();
  const { logo, setLogo } = useLogo();

  const fontTypeHandler = () => {
    setLogo((prev) => ({ ...prev, fontFamily: family }));
    navigate("/logoicon");
  };

  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid var(--chakra-colors-gray-300)"
      borderLeft="1px solid var(--chakra-colors-gray-300)"
      _hover={{ bgColor: "bg.500", color: "white", cursor: "pointer" }}
      p="16"
      onClick={fontTypeHandler}
    >
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${family}`}
        />
      </Helmet>
      <Heading css={{ fontFamily: family }} _hover={{ cursor: "default" }}>
        {logo.name}
      </Heading>
    </GridItem>
  );
};

export { FontCard };
