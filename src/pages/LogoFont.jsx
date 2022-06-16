import { Box, Input, Grid } from "@chakra-ui/react";
import { useLogo } from "context";
import { FontCard } from "components";

const LogoFont = () => {
  const { logo, setLogo } = useLogo();

  return (
    <Box ml={{ base: 0, md: "15rem" }} pt="8">
      <Input
        display="block"
        placeholder="Business Name"
        borderRadius="32"
        bgColor="bg.500"
        paddingX="4"
        paddingY="6"
        color="white"
        fontSize="20"
        fontWeight="600"
        width="20rem"
        m="auto"
        value={logo.name}
        onChange={(e) => setLogo((prev) => ({ ...prev, name: e.target.value }))}
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