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
      {labels.discoverWorld}
    </LandingDescription>
  </LandingWrapper>
)};

export default LandingPage;
