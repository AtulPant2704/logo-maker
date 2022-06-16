import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Box, OrderedList, ListItem, Heading } from "@chakra-ui/react";
import { useLogo } from "context";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logo } = useLogo();

  return (
    <Box
      as="aside"
      position="fixed"
      h="100vh"
      width="15rem"
      bgColor="bg.500"
      color="white"
      display={{ base: "none", md: "flex" }}
      justifyContent="center"
      alignItems="center"
      fontWeight="semibold"
      fontSize="lg"
    >
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${logo.fontFamily}`}
        />
      </Helmet>
      {logo.fontFamily !== "" ? (
        <Heading
          as="h1"
          size="3xl"
          css={{ fontFamily: logo.fontFamily }}
          _hover={{ cursor: "default" }}
          position="absolute"
          top="5%"
        >
          Hello
        </Heading>
      ) : null}
      <OrderedList _hover={{ cursor: "pointer" }}>
        <ListItem onClick={() => navigate("/logofont")}>
          Select a wordmark
        </ListItem>
        <ListItem
          py="2"
          onClick={() =>
            logo.fontFamily !== "" ? navigate("/logoicon") : null
          }
        >
          Search for a logomark
        </ListItem>
        <ListItem>Download your logo</ListItem>
      </OrderedList>
    </Box>
  );
};

export { Sidebar };
