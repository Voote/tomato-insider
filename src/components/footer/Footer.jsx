import React from "react";
import { FooterLink, FooterText, FooterWrapper } from "./Footer.styles";

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      © 2023 Tomatoes Inc. All rights reserved. | Created by{" "}
      <FooterLink href="https://github.com/Voote">Jakub Krzywanski</FooterLink>
    </FooterText>
  </FooterWrapper>
);

export default Footer;
