import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/ContactDetails.css";

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2em 0;
  background-color: #5e6a6e;
  vertical-align: center;
`;

const NavLink = styled.a`
  // color: ${({ theme }) => theme.text}
  color: white;
  margin: 10px;
  height: 10px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
const ContactDetails = () => {
  return (
    <Footer id="footer">
      <NavLink href="https://github.com/scott-hannabuss">
        <GitHubIcon className="icon" />
      </NavLink>
      <NavLink href="https://uk.linkedin.com/in/scotthannabuss">
        <LinkedInIcon className="icon" />
      </NavLink>
      <NavLink href="https://twitter.com/scotthannabuss?lang=en">
        <TwitterIcon className="icon" />
      </NavLink>
      <NavLink href="mailto: scotthannabuss@gmail.com">
        <EmailIcon className="icon" />
      </NavLink>
    </Footer>
  );
};

export default ContactDetails;
