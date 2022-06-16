import { useState, useEffect, useRef } from "react";
import { Box, Input, Grid } from "@chakra-ui/react";
import { useLogo } from "context";
import { getIconsHandler } from "utils";
import { IconCard } from "components";

const LogoIcon = () => {
  const { logo, setLogo } = useLogo();
  const [icons, setIcons] = useState([]);
  const timerRef = useRef();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (logo.iconName) {
        getIconsHandler(setIcons, logo.iconToken, logo.iconName);
      }
    }, 300);
  }, [logo.iconName, logo.iconToken]);

  return (
    <Box ml={{ base: 0, md: "15rem" }} pt="8">
      <Input
        display="block"
        placeholder="Search for a logoicon"
        borderRadius="32"
        bgColor="bg.500"
        paddingX="4"
        paddingY="6"
        color="white"
        fontSize="20"
        fontWeight="600"
        width="20rem"
        m="auto"
        value={logo.iconName}
        onChange={(e) =>
          setLogo((prev) => ({ ...prev, iconName: e.target.value }))
        }
      />
      <Grid mt="8" templateColumns="repeat( 2, minmax(100px, 1fr) )">
        {icons.map((icon) => (
          <IconCard key={icon.id} {...icon} />
        ))}
      </Grid>
    </Box>
  );
};

export { LogoIcon };
