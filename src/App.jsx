import Footer from "./components/Footer/Footer";
import TopHeader from "./components/headers/Top/Index";
import LandingPage from "./components/landing/LandingPage";
import Categories from "./components/sections/Categories/Categories";
import TomatoeSpieces from "./components/sections/Spieces/Spieces";

const App = () => (
  <>
    <TopHeader />
    <LandingPage />
    <Categories />
    <TomatoeSpieces />
    <Footer />
  </>
);

export default App;
