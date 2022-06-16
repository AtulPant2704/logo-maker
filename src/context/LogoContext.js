import { createContext, useContext, useState, useEffect } from "react";
import { getIconTokenHandler } from "utils";

const initialState = {
  name: "",
  fontFamily: "",
  iconName: "",
  iconImg: "",
  iconToken: "",
};

const LogoContext = createContext(initialState);

const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(initialState);

  useEffect(() => {
    getIconTokenHandler(setLogo);
  }, []);

  return (
    <LogoContext.Provider value={{ logo, setLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

const useLogo = () => useContext(LogoContext);

export { LogoProvider, useLogo };
