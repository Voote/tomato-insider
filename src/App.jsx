import Footer from "./components/Footer/Footer";
import TopHeader from "./components/headers/Top/Index";
import LandingPage from "./components/landing/LandingPage";
import Sections from "./components/sections/Sections";
import TomatoeSpieces from "./components/sections/Spieces/Spieces";
import ViteButton from "./components/Vite";

const App = () => (
  <div className="App">
    <TopHeader />
    <LandingPage />
    <Sections />
    <TomatoeSpieces />
    <ViteButton />
    <Footer />
  </div>
);

export default App;
