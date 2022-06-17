import { useState, useEffect } from "react";
import { Box, Input, Grid, Flex, Heading } from "@chakra-ui/react";
import { useLogo } from "context";
import { getFontsHandler } from "utils";
import { FontCard } from "components";

const LogoFont = () => {
  const { logo, setLogo } = useLogo();
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    getFontsHandler(setFonts);
  }, []);

  return (
    <Box ml={{ base: 0, md: "15rem" }} pt="8">
      <Input
        display="block"
        position="sticky"
        h="3rem"
        top="2rem"
        placeholder="Business Name"
        maxLength="10"
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
      {logo.name === "" ? (
        <Flex justifyContent="center" alignItems="center" h="80vh">
          <Heading>Enter logo name</Heading>
        </Flex>
      ) : null}
      <Grid mt="8" templateColumns="repeat( 2, minmax(100px, 1fr) )">
        {logo.name
          ? fonts.map((font) => <FontCard key={font.family} {...font} />)
          : null}
      </Grid>
    </Box>
  );
};

export { LogoFont };
