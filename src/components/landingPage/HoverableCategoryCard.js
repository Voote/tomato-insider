import styled from "@emotion/styled";
import { CategoryCard } from "./LandingPagestyles.styles";

export const HoverableCategoryCard = styled(CategoryCard)`
  .text-area {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    transition: visibility 0s, opacity 0.3s ease-in-out;
  }

  &:hover .text-area {
    visibility: visible;
    opacity: 1;
  }
`;
