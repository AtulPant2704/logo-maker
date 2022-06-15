import { Box, Input, Grid } from "@chakra-ui/react";
import { FontCard } from "components";

const LogoFont = () => {
  return (
    <Box ml={{ base: 0, md: "15rem" }} pt="8">
      <Input
        placeholder="Business Name"
        borderRadius="32"
        bgColor="bg.500"
        paddingX="4"
        paddingY="6"
        color="white"
        fontSize="20"
        fontWeight="600"
      />
      <Grid mt="8" templateColumns="repeat( 2, minmax(100px, 1fr) )">
        <FontCard />
        <FontCard />
        <FontCard />
        <FontCard />
        <FontCard />
        <FontCard />
        <FontCard />
        <FontCard />
      </Grid>
    </Box>
  );
};

export { LogoFont };
