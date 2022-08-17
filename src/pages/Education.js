import { AboutContainer } from "../components/styles/About.styled";
import { Container } from "../components/styles/Container.styled";

const Education = () => {
  return (
    <AboutContainer>
      <h1
        id="edu"
        style={{
          fontFamily: "Allan",
          fontSize: 40,
          marginTop: 100,
          textAlign: "center",
        }}
      >
        Education
      </h1>
      <h4 style={{ textAlign: "center" }}>
        University of Texas at Dallas, Master of Science - MS, Computer Software
        Engineering
      </h4>
      <h4 style={{ textAlign: "center" }}>
        University of Mumbai, Bachelors of Engineering, Computer Engineering
      </h4>
      <hr />
    </AboutContainer>
  );
};

export default Education;
