import axios from "axios";

const getIconTokenService = () => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  return axios.post(
    "https://api.flaticon.com/v3/app/authentication",
    { apikey: process.env.REACT_APP_FLAT_ICON_KEY },
    headers
  );
};

export { getIconTokenService };
