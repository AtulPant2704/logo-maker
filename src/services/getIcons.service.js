import axios from "axios";

const getIconsService = (iconToken, iconName) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${iconToken}`,
  };

  return axios.get(
    `https://api.flaticon.com/v3/search/icons?q=${iconName}&limit=50`,
    { headers: headers }
  );
};

export { getIconsService };
