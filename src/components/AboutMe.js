import styled from "styled-components";
import "../styles/AboutMe.css";

const AboutMe = () => {
  const AboutContainer = styled.div`
    background-color: rgba(225, 225, 225, 0.8);
    padding: 1em 2em 1em 2em;
    width: 80%;
    margin: auto;
    display: flex;
    text-align: justify;
    flex-direction: column;
    background-color: #5e6a6e;
    font-family: "Lato", sans-serif;
    color: white;
    margin-top: 3%;
    margin-bottom: 7%;
  `;

  return (
    <AboutContainer className="about-me-container">
      <h2 className="about-me-header">About Me</h2>
      <p>
        I have always had an interest and love for tech and software, and I
        decided during lockdown that the time had come to pursue that interest
        further. I enrolled for Manchester Codes' full-stack engineering course,
        and have been really enjoying learning and developing my skills
        throughout this time.
        <br></br>
        <br></br>In my spare time, I like doing a number of different things. I
        enjoy running and will be participating in my second marathon in October
        2021. I am also a big music fan, and have attended multiple Glastonbury
        festivals and am currently learning to play the guitar myself. Other
        interests include video games, films and books.
        <br></br>
        <br></br>
        You can find a sample of some of my projects below, and if you would
        like to reach out for any reason feel free to contact me via any of the
        methods listed in the footer of this site.
      </p>
    </AboutContainer>
  );
};

export default AboutMe;
