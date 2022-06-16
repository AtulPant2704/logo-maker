import { getIconTokenService } from "services";

const getIconTokenHandler = async (setLogo) => {
  try {
    const response = await getIconTokenService();
    if (response.status === 200) {
      setLogo((prev) => ({ ...prev, iconToken: response.data.data.token }));
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { getIconTokenHandler };
