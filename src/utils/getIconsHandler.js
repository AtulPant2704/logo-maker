import { getIconsService } from "services";

const getIconsHandler = async (setIcons, iconToken, iconName) => {
  try {
    const response = await getIconsService(iconToken, iconName);
    if (response.status === 200) {
      setIcons(response.data.data);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { getIconsHandler };
