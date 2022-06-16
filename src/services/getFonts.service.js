import axios from "axios";

const getFontsService = () => {
  const googleFontKey = process.env.REACT_APP_GOOGLE_FONT_KEY;
  return axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontKey}`
  );
};

export { getFontsService };
