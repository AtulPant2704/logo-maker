import { useNavigate } from "react-router-dom";
import { Image, GridItem } from "@chakra-ui/react";
import { useLogo } from "context";

const IconCard = ({ images, family_name }) => {
  const navigate = useNavigate();
  const { setLogo } = useLogo();

  const iconTypeHandler = () => {
    setLogo((prev) => ({ ...prev, iconImg: images["64"] }));
    navigate("/download");
  };

  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid var(--chakra-colors-gray-300)"
      borderLeft="1px solid var(--chakra-colors-gray-300)"
      _hover={{ cursor: "pointer" }}
      p="16"
      onClick={iconTypeHandler}
    >
      <Image src={images["64"]} alt={family_name} />
    </GridItem>
  );
};

export { IconCard };
