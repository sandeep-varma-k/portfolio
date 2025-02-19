import './App.css'
import AppNavigation from "./components/Navigation/AppNavigation.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Expertise from "./components/Expertise/Expertise.tsx";
import Timeline from "./components/Timeline/Timeline.tsx";
import {Container} from "@mui/material";

function App() {

  return (
    <Container>
        <AppNavigation />
        <Hero />
        <Expertise />
        <Timeline />
    </Container>
  )
}

export default App
