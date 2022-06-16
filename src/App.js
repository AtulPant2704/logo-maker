import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Home, LogoFont, LogoIcon, DownloadLogo } from "pages";
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
        <Route path="/download" element={<DownloadLogo />} />
      </Routes>
    </Box>
  );
}

export default App;
