import { createContext, useContext, useState } from "react";

const initialState = {
  name: "",
  fontType: "",
  icon: "",
};

const LogoContext = createContext(initialState);

const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(initialState);

  return (
    <LogoContext.Provider value={{ logo, setLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

const useLogo = () => useContext(LogoContext);

export { LogoProvider, useLogo };
