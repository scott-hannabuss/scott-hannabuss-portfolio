import styled from "styled-components";

const AboutMe = () => {
  const AboutContainer = styled.div`
    background-color: rgba(225, 225, 225, 0.8);
    padding: 3em 2em 3em 2em;
    width: 80%;
    margin: auto;
    display: flex;
    text-align: center;
    flex-direction: column;
  `;

  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>
        Hello! My name is Scott and I am a recruiter with a passion for
        programming. I have always had an interest and love for tech, and I
        decided during lockdown that the time had come to pursue that interest
        further. I enrolled for an online coding course, and have been really
        enjoying learning and developing some core coding skills with Manchester
        Codes.
      </p>
    </AboutContainer>
  );
};

export default AboutMe;
