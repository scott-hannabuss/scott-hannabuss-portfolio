import styled from "styled-components";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <p>Portfolio</p>
      <p>Contact</p>
      <p>Dark</p>
    </NavContainer>
  );
};

export default Navbar;
