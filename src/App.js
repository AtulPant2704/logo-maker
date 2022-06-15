import { Routes, Route, useLocation } from "react-router-dom";
import { Home, LogoFont } from "pages";
import { Sidebar } from "components";
import { Box } from "@chakra-ui/react";

function App() {
  const { pathname } = useLocation();
  return (
    <Box h="100%">
      {pathname !== "/" ? <Sidebar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logofont" element={<LogoFont />} />
      </Routes>
    </Box>
  );
}

export default App;
