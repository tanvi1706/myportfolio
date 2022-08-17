import { AboutContainer } from "../components/styles/About.styled";

const Aboutme = () => {
  return (
    <AboutContainer>
      <h1
        id="aboutme"
        style={{
          fontFamily: "Allan",
          fontSize: 40,
          marginTop: 100,
          textAlign: "center",
        }}
      >
        About me
      </h1>
      <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
        Hi, I am currently pursuing a master's degree in computer science with
        focus on software engineering. I have previously worked at Zenith and
        DigiLocker as a Software Developer intern. Languages & Technologies:
        Java, Python, JavaScript, React JS, HTML, CSS Databases & Backend
        Frameworks: MongoDB, MySQL, Firebase, Node-JS, Spark, Spring Boot
        Frameworks and Libraries: Django, Flask, React, React Native, Flutter,
        VueJS. I also spend a lot of time self-reflecting and reading books on
        personal development and non-fiction. I am an officially certified Zumba
        instructor, and a fitness enthusiast, I like to do Zumba and Aerobics
        workouts.
      </p>
    </AboutContainer>
  );
};

export default Aboutme;
