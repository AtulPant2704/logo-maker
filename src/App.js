import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Home, LogoFont, LogoIcon } from "pages";
import { Sidebar } from "components";

function App() {
  const { pathname } = useLocation();
  return (
    <Box h="100%">
      {pathname !== "/" ? <Sidebar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logofont" element={<LogoFont />} />
        <Route path="/logoicon" element={<LogoIcon />} />
      </Routes>
    </Box>
  );
}

export default App;
