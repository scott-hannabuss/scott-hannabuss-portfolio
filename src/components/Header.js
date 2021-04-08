import styled from "styled-components";
import scottImage from "../images/Scott_image.png";
import "../styles/Header.css";

const Header = () => {
  const ScottImage = styled.img`
    height: 20em;
    width: 20em;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 1%;
    margin-bottom: 4%;
  `;

  const Headers = styled.span`
    color: white;
  `;

  return (
    <div>
      <Headers>
        <h1 className="headers">Scott Hannabuss</h1>
        <h2 className="headers">Software Developer</h2>
      </Headers>
      <ScottImage className="scott-image" src={scottImage} />
    </div>
  );
};

export default Header;
