import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { RunningText } from "./components/RunningText"
import { Menu } from "./Menu"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"
import { Section4 } from "./Section4"
import { Section5 } from "./Section5"

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <RunningText />
      <Section2 />
      <Menu />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  )
}

export default App
