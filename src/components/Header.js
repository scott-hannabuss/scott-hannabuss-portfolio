import styled from "styled-components";
import scottImage from "../images/Scott_image.png";

const Header = () => {
  const ScottImage = styled.img`
    height: 15em;
    width: 15em;
    object-fit: contain;
    border-radius: 50%;
  `;

  return (
    <div>
      <h1>Scott Hannabuss</h1>
      <h2>Software Developer</h2>
      <ScottImage src={scottImage} />
    </div>
  );
};

export default Header;
