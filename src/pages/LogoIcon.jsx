import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Grid,
  Flex,
  Heading,
  CircularProgress,
} from "@chakra-ui/react";
import { useLogo } from "context";
import { getIconsHandler, navigateHandler } from "utils";
import { IconCard } from "components";

const LogoIcon = () => {
  const navigate = useNavigate();
  const { logo, setLogo } = useLogo();
  const [icons, setIcons] = useState([]);
  const [iconLoader, setIconLoader] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIconLoader(true);
    timerRef.current = setTimeout(async () => {
      if (logo.iconName) {
        await getIconsHandler(setIcons, logo.iconToken, logo.iconName);
        setIconLoader(false);
      }
    }, 300);
  }, [logo.iconName, logo.iconToken]);

  useEffect(() => {
    navigateHandler(logo, navigate);
  }, []);

  return (
    <Box ml={{ base: 0, md: "15rem" }} pt="8">
      <Input
        display="block"
        position="sticky"
        h="3rem"
        top="2rem"
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
      {icons.length === 0 && logo.iconName === "" ? (
        <Flex justifyContent="center" alignItems="center" h="80vh">
          <Heading>Start Searching for an Icon</Heading>
        </Flex>
      ) : null}
      <Grid mt="8" templateColumns="repeat( 2, minmax(100px, 1fr) )">
        {icons.map((icon) => (
          <IconCard key={icon.id} {...icon} />
        ))}
      </Grid>
      {icons.length === 0 && logo.iconName !== "" && !iconLoader ? (
        <Flex justifyContent="center" alignItems="center" h="80vh">
          <Heading>No icon found for "{logo.iconName}"</Heading>
        </Flex>
      ) : null}
      {icons.length === 0 && logo.iconName !== "" && iconLoader ? (
        <Flex justifyContent="center" alignItems="center" h="80vh">
          <CircularProgress isIndeterminate color="brand.500" />
        </Flex>
      ) : null}
    </Box>
  );
};

export { LogoIcon };
