import React from "react";
import { FooterLink, FooterText, FooterWrapper } from "./Footer.styles";

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      © 2023 Tomatoes Inc. All rights reserved. | Created by{" "}
      <FooterLink href="https://example.com">Example.com</FooterLink>
    </FooterText>
  </FooterWrapper>
);

export default Footer;
