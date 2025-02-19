import './App.css'
import AppNavigation from "./components/layout/Navigation/AppNavigation.tsx";
import Hero from "./components/features/Hero/Hero.tsx";
import Expertise from "./components/features/Expertise/Expertise.tsx";
import Timeline from "./components/features/Timeline/Timeline.tsx";
import {Container} from "@mui/material";
import Footer from "./components/layout/Footer/Footer.tsx";

function App() {

  return (
    <Container>
        <AppNavigation />
        <Hero />
        <Expertise />
        <Timeline />
        <Footer />
    </Container>
  )
}

export default App
