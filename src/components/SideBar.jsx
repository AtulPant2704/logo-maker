import { Box, OrderedList, ListItem } from "@chakra-ui/react";

const Sidebar = () => {
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
      <OrderedList _hover={{ cursor: "default" }}>
        <ListItem>Select a wordmark</ListItem>
        <ListItem py="2">Search for a logomark</ListItem>
        <ListItem>Download your logo</ListItem>
      </OrderedList>
    </Box>
  );
};

export { Sidebar };
