import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, OrderedList, ListItem, Heading, Image } from "@chakra-ui/react";
import { useLogo } from "context";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
      {logo.iconImg !== "" ? (
        <Image
          src={logo.iconImg}
          alt={logo.iconName}
          position="absolute"
          top="5%"
        />
      ) : null}
      {logo.fontFamily !== "" ? (
        <Heading
          as="h1"
          size="3xl"
          css={{ fontFamily: logo.fontFamily }}
          _hover={{ cursor: "default" }}
          position="absolute"
          top={logo.iconImg ? "15%" : "5%"}
        >
          {logo.name}
        </Heading>
      ) : null}
      <OrderedList _hover={{ cursor: "pointer" }}>
        <ListItem
          color={pathname === "/logofont" ? "white" : "gray.500"}
          onClick={() => navigate("/logofont")}
        >
          Select the logo font
        </ListItem>
        <ListItem
          py="2"
          color={pathname === "/logoicon" ? "white" : "gray.500"}
          onClick={() =>
            logo.fontFamily !== "" ? navigate("/logoicon") : null
          }
        >
          Select the logo icon
        </ListItem>
        <ListItem
          color={pathname === "/download" ? "white" : "gray.500"}
          onClick={() => (logo.iconImg !== "" ? navigate("/download") : null)}
        >
          Download your logo
        </ListItem>
      </OrderedList>
    </Box>
  );
};

export { Sidebar };
