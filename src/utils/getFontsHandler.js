import { getFontsService } from "services";

const getRandomFonts = (fonts) => {
  let fontsArr = [];
  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * 1001);
    const findFamily = fontsArr.some(
      (font) => font["family"] === fonts[randomIndex]["family"]
    );
    if (!findFamily) {
      fontsArr.push(fonts[randomIndex]);
    } else {
      i--;
    }
  }
  return fontsArr;
};

const getFontsHandler = async (setFonts) => {
  try {
    const response = await getFontsService();
    if (response.status === 200) {
      const randomFonts = getRandomFonts(response.data.items);
      setFonts(randomFonts);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { getFontsHandler };
