import { Container } from "../../components/styles/Container.styled";
import Aboutme from "../Aboutme";
import Experience from "../Experience";
import Education from "../Education";

const Home = () => {
  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 50,
          }}
        >
          <h1
            style={{
              fontFamily: "Allan",
              fontSize: 60,
              marginLeft: 90,
              marginRight: 210,
            }}
          >
            Tanvi Krishna Patil
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: 30,
            }}
          >
            <h4>My Projects</h4>
            <a
              href="#aboutme"
              style={{ textDecoration: "none", color: "#8B8000" }}
            >
              <h4>About Me</h4>
            </a>
            <a
              href="#experi"
              style={{ textDecoration: "none", color: "#8B8000" }}
            >
              <h4>Experience</h4>
            </a>
            <a href="#edu" style={{ textDecoration: "none", color: "#8B8000" }}>
              <h4>Education</h4>
            </a>
          </div>
        </div>
        <img
          src="homes.png"
          alt="home"
          style={{ height: 700, width: 990 }}
        ></img>
      </Container>
      <Aboutme />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
