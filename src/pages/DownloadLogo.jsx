import { useRef } from "react";
import { Helmet } from "react-helmet";
import { Flex, Button, Image, Heading } from "@chakra-ui/react";
import { useLogo } from "context";
import { downloadLogo } from "utils";

const DownloadLogo = () => {
  const { logo } = useLogo();
  const elementRef = useRef();

  return (
    <Flex
      ml={{ base: 0, md: "15rem" }}
      pt="8"
      flexDirection="column"
      gap="10"
      alignItems="center"
    >
      <Button
        borderRadius="32"
        paddingX="10"
        paddingY="6"
        fontSize="20"
        onClick={() => downloadLogo(elementRef.current)}
      >
        Download
      </Button>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${logo.fontFamily}`}
        />
      </Helmet>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="4"
        bgColor="bg.500"
        p="4"
        w="25rem"
        h="25rem"
        ref={elementRef}
      >
        <Image src={logo.iconImg} alt={logo.iconName} w="12rem" h="12rem" />
        <Heading
          as="h1"
          size="3xl"
          css={{ fontFamily: logo.fontFamily }}
          color="white"
        >
          {logo.name}
        </Heading>
      </Flex>
    </Flex>
  );
};

export { DownloadLogo };
