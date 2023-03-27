import { useContext } from "react";
import { LabelsContext } from "../../LabelsContext";
import {
  LandingDescription,
  LandingTitle,
  LandingWrapper,
} from "./LandingPagestyles.styles";

const LandingPage = () => {
  const labels = useContext(LabelsContext)

  return (
  <LandingWrapper dark>
    <LandingTitle>{labels.welcomeTo}</LandingTitle>
    <LandingDescription>
      Discover a world of juicy, flavorful tomatoes 🍅 in every shape and color.
      Find your perfect variety below!
    </LandingDescription>
  </LandingWrapper>
)};

export default LandingPage;
