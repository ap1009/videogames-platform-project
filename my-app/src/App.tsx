import { Button, ButtonGroup, Box, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import GamesGrid from "./components/GamesGrid";

function App() {
  const [toggleOn, setOnToggle] = useState(false);

  const handleOnToggle = () => {
    setOnToggle(!toggleOn);
  };

  return (
    <>
      <NavigationBar onToggle={handleOnToggle} toggleState={toggleOn} />
      <GamesGrid />
    </>
  );
}

export default App;
