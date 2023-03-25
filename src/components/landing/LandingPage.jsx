import {
  LandingDescription,
  LandingTitle,
  LandingWrapper,
} from "./LandingPagestyles.styles";

const LandingPage = () => (
  <LandingWrapper dark>
    <LandingTitle>Welcome to our Tomato Emporium!</LandingTitle>
    <LandingDescription>
      Discover a world of juicy, flavorful tomatoes 🍅 in every shape and color.
      Find your perfect variety below!
    </LandingDescription>
  </LandingWrapper>
);

export default LandingPage;
