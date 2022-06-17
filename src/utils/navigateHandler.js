const navigateHandler = (logo, navigate) => {
  if (logo.name === "") {
    navigate("/");
  } else if (logo.fontFamily === "") {
    navigate("/logofont");
  } else if (logo.iconImg === "") {
    navigate("/logoicon");
  }
};

export { navigateHandler };
