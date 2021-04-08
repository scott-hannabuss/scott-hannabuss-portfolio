import styled from "styled-components";
import "../styles/Navbar.css";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>;

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #5e6a6e;
  font-family: "Lato", sans-serif;
  color: white;
  min-height: 60px !important;
  align-items: center;
`;

const NavLinks = styled.a`
  text-decoration: none;
  font-size: 1em;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  :visited {
    color: white;
  }
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLinks className="nav-link" href="#portfolio">
        Portfolio
      </NavLinks>
      <NavLinks className="nav-link" href="#footer">
        Contact
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
