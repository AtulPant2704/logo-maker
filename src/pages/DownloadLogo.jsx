import { Helmet } from "react-helmet";
import { Box, Flex, Button, Image, Heading } from "@chakra-ui/react";
import { useLogo } from "context";

const DownloadLogo = () => {
  const { logo } = useLogo();

  return (
    <Flex
      ml={{ base: 0, md: "15rem" }}
      pt="8"
      flexDirection="column"
      gap="10"
      alignItems="center"
    >
      <Button borderRadius="32" paddingX="10" paddingY="6" fontSize="20">
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
        gap="2"
        bgColor="bg.500"
        p="4"
        w="25rem"
        h="25rem"
      >
        <Image src={logo.iconImg} alt={logo.iconName} w="15rem" h="15rem" />
        <Heading
          as="h1"
          size="3xl"
          css={{ fontFamily: logo.fontFamily }}
          color="white"
          pt="4"
        >
          {logo.name}
        </Heading>
      </Flex>
    </Flex>
  );
};

export { DownloadLogo };
