import axios from "axios";

const getIconTokenService = () => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  return axios.post(
    "https://api.flaticon.com/v3/app/authentication",
    { apikey: "21f60effb7425d490e23f52a1b1d59091127b1b3" },
    headers
  );
};

export { getIconTokenService };
