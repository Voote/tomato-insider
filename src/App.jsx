import Footer from "./components/footer/Footer";
import TopHeader from "./components/headers/top/Index";
import LandingPage from "./components/landingPage/LandingPage";
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
