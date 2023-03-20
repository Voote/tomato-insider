import Footer from "./components/Footer/Footer";
import TopHeader from "./components/headers/Top/Index";
import LandingPage from "./components/LandingPage/LandingPage";
import ViteButton from "./components/Vite";

const App = () => (
  <div className="App">
    <TopHeader />
    <LandingPage />
    <ViteButton />
    <Footer />
  </div>
);

export default App;
