import { Box, Input, Grid } from "@chakra-ui/react";
import { IconCard } from "components";

const LogoIcon = () => {
  return (
    <Box ml={{ base: 0, md: "15rem" }} pt="8">
      <Input
        display="block"
        placeholder="Search for a logomark"
        borderRadius="32"
        bgColor="bg.500"
        paddingX="4"
        paddingY="6"
        color="white"
        fontSize="20"
        fontWeight="600"
        width="20rem"
        m="auto"
      />
      <Grid mt="8" templateColumns="repeat( 2, minmax(100px, 1fr) )">
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
      </Grid>
    </Box>
  );
};

export { LogoIcon };
