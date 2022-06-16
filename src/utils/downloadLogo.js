import * as htmlToImage from "html-to-image";

const downloadLogo = async (element) => {
  const dataUrl = await htmlToImage.toPng(element);
  const link = document.createElement("a");
  link.download = "logo.png";
  link.href = dataUrl;
  link.click();
};

export { downloadLogo };
