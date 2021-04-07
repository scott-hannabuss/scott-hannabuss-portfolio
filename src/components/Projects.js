import styled from "styled-components";
import surrealestateimage from "../images/surreal-estate.jpg";
import weatherappimage from "../images/weather-app.jpg";
import booklibraryimage from "../images/book-library.jpg";
import techtestimage from "../images/nasa.jpg";
import musiclibraryimage from "../images/music-library.jpg";
import expressbasics from "../images/express-basics.jpg";
import cruiseships from "../images/cruise-ships.jpg";
import virtualpet from "../images/virtual-pet.jpg";

const ProjectContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: items;
`;

const ProjectImg = styled.img`
  width: 50%;
`;

const Projects = () => {
  return (
    <Projects>
      <h2>Portfolio</h2>
      <ProjectContainer>
        <ProjectImg src={surrealestateimage} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={weatherappimage} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={booklibraryimage} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={techtestimage} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={musiclibraryimage} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={expressbasics} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={cruiseships} />
        <p>A project</p>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImg src={virtualpet} />
        <p>A project</p>
      </ProjectContainer>
    </Projects>
  );
};

export default Projects;
