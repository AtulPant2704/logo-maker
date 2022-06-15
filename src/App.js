import { Routes, Route } from "react-router-dom";
import { Home, LogoFont } from "pages";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box h="100%">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logofont" element={<LogoFont />} />
      </Routes>
    </Box>
  );
}

export default App;
