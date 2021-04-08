import styled from "styled-components";
import surrealestateimage from "../images/surreal-estate.jpg";
import weatherappimage from "../images/weather-app.jpg";
import booklibraryimage from "../images/book-library.jpg";
import techtestimage from "../images/nasa.jpg";
import musiclibraryimage from "../images/music-library.jpg";
import expressbasics from "../images/express-basics.jpg";
import cruiseships from "../images/cruise-ships.jpg";
import virtualpet from "../images/virtual-pet.jpg";
import "../styles/Projects.css";

const ProjectImg = styled.img`
  width: 50%;
  justify-content: center;
  align-self: center;
  @media (max-width: 750px) {
    width: 90%;
  }
`;

const PortfolioHeader = styled.span`
  color: white;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-text: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    display: block;
  }
`;

const Projects = () => {
  return (
    <div>
      <PortfolioHeader>
        <h1 className="portfolio-header" id="portfolio">
          Portfolio
        </h1>
      </PortfolioHeader>
      <h2 className="project-header-desktop">SURREAL ESTATE</h2>
      <ProjectContainer>
        <ProjectImg src={surrealestateimage} />
        <p className="project-description-desktop">
          A mock property website designed using React. More advanced features
          include the ability to login via Facebook and save properties which
          will then render in the "saved properties" page. You can view a
          deployed version of the project{" "}
          <a href="https://surreal-estate-ten.vercel.app/"> here</a> or you can
          view the project on Github{" "}
          <a href="https://github.com/scott-hannabuss/Surreal-Estate">here.</a>
        </p>
      </ProjectContainer>

      <h2 className="project-header">WEATHER APP</h2>
      <ProjectContainer>
        <p className="project-description-mobile">
          A React application that retrieves data from the Open Weather API when
          users input the name of a UK city. This project uses features
          including React Testing Library, PropTypes, React-Router DOM and
          Axios. The project can be viewed on Vercel{" "}
          <a href="https://weather-app-eta-eight.vercel.app/">here</a> or on
          GitHub{" "}
          <a href="https://github.com/scott-hannabuss/Weather-App"> here.</a>
        </p>
        <ProjectImg src={weatherappimage} />
      </ProjectContainer>

      <h2 className="project-header-desktop">BOOK LIBRARY API</h2>
      <ProjectContainer>
        <ProjectImg src={booklibraryimage} />
        <p className="project-description-desktop">
          A RESTful API which can take incoming HTTP requests and perform
          various CRUD operations on a MySQL relational database based on these
          incoming requests. The database contains book records which can have
          authors and genres attached to them. The application utilises various
          technologies including SQL (and MySQL Workbench), Docker, Express,
          Sequelize, Mocha, Chai and SuperTest. The code can be viewed on GitHub{" "}
          <a href="https://github.com/scott-hannabuss/book-library-api">here</a>{" "}
          or a sample of the deployed database can be viewed on Heroku{" "}
          <a href="https://booklibrarymcrcodes.herokuapp.com/books"> here.</a>
        </p>
      </ProjectContainer>

      <h2 className="project-header">NASA IMAGE SEARCH</h2>
      <ProjectContainer>
        <p className="project-description-mobile">
          A web application built using React that allows users to search and
          retrieve images from the NASA image database through their API. When a
          user inputs a relevant search term such as "moon" or "rocket" into the
          search area, the corresponding images from NASA's image database will
          be displayed. A deployed version of the app can be viewed{" "}
          <a href="https://react-tech-test.vercel.app/"> here</a> or a link to
          the code on GitHub can be viewed{" "}
          <a href="https://github.com/scott-hannabuss/React-Tech-Test">
            {" "}
            here.
          </a>
        </p>
        <ProjectImg src={techtestimage} />
      </ProjectContainer>

      <h2 className="project-header-desktop">MUSIC LIBRARY API</h2>
      <ProjectContainer>
        <ProjectImg src={musiclibraryimage} />
        <p className="project-description-desktop">
          A RESTful API which takes incoming HTTP requests and performs various
          CRUD operations on a MySQL database based on these incoming requests.
          The database contains artist records, which in turn can have albums
          attached to them, and these albums can then have songs attached to
          them. A sample of the deployed database on Heroku can be viewed{" "}
          <a href="https://musiclibraryapi.herokuapp.com/artists"> here</a> or
          the project's code can be viewed via GitHub{" "}
          <a href="https://github.com/scott-hannabuss/music-library-api">
            {" "}
            here.
          </a>
        </p>
      </ProjectContainer>

      <h2 className="project-header">EXPRESS API</h2>
      <ProjectContainer>
        <p className="project-description-mobile">
          A web API that makes a series of basic javascript functions accessible
          through HTTP requests. The project can be viewed via GitHub{" "}
          <a href="https://github.com/scott-hannabuss/javascript-basics-express">
            here.
          </a>
        </p>
        <ProjectImg src={expressbasics} />
      </ProjectContainer>

      <h2 className="project-header-desktop">CRUISE SHIP GUI</h2>
      <ProjectContainer>
        <ProjectImg src={cruiseships} />
        <p className="project-description-desktop">
          This project simulates cruise ships sailing and docking in various
          ports. The project also has a GUI where the user can control the
          cruise ship and sail them from port to port via the “Set Sail” button.
          This project applies concepts of Object-oriented programming and uses
          Javascript, Jest and Node. An interactive version of the GUI can be
          viewed{" "}
          <a href="https://scott-hannabuss.github.io/cruise-ships-/">here</a> or
          the code can be viewed on GitHub{" "}
          <a href="https://github.com/scott-hannabuss/cruise-ships-">here.</a>
        </p>
      </ProjectContainer>

      <h2 className="project-header">VIRTUAL PET</h2>
      <ProjectContainer>
        <p className="project-description-mobile">
          A project which utilises core concepts of Object-oriented programming
          to create Javascript "pets". Each pet can do a series of interactive
          things. For example, they can get older and hungrier. They can also be
          fed or taken for walks as they become more hungry and more unfit. The
          project can be viewed on GitHub{" "}
          <a href="https://github.com/scott-hannabuss/virtual-pet">here.</a>
        </p>
        <ProjectImg src={virtualpet} />
      </ProjectContainer>
    </div>
  );
};

export default Projects;
