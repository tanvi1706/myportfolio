import { AboutContainer } from "../components/styles/About.styled";
import { Container } from "../components/styles/Container.styled";
const Experience = () => {
  return (
    <AboutContainer>
      <h1
        id="experi"
        style={{
          fontFamily: "Allan",
          fontSize: 40,
          marginTop: 100,
          textAlign: "center",
        }}
      >
        Experience
      </h1>
      <h3 style={{ textAlign: "center" }}>
        Application Developer - Global Product & Technology Intern
      </h3>
      <Container>
        <img
          src="/adp.png"
          alt="adp"
          style={{
            width: 400,
            height: 300,
          }}
        />
        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
          - Created an innovation idea app using React (in Typescript) to help
          manage and prioritise innovation ideas across 8 scrum teams and 5
          leaders to reduce technical debt.
          <br /> - Created a tool to define the Weighted Shortest Job First
          (WSJF) allowing for the prioritization of approximately 100 new ideas
          each quarter. <br />- Reducing the dependency on Excel Sheets by
          allowing teams to centrally collect, store, and gauge the popularity
          of ideas. <br />- Implemented microservices architecture design to
          create various endpoints for the UI to interact with the MongoDB using
          Nodejs, Express in Typescript template. <br />- Performed rigorous
          testing of the endpoints, discovered various edge cases using postman
          and documented the results. <br />- Used React-Redux to maintain the
          store for ideas, and Redux-Thunk as a middleware. <br />- Created a
          dashboard using ChartJS (Doughnut) with 3 different criteria: Teams,
          Relevant Applications, WSJF. <br />- Interacted with 6 different roles
          in the team, to learn about daily routines and responsibilities.
        </p>
      </Container>
      <hr />
      <h3 style={{ textAlign: "center" }}>CS Outreach Instructor</h3>
      <Container>
        <img
          src="/utd.png"
          alt="utd"
          style={{
            width: 200,
            height: 200,
          }}
        />
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            marginLeft: 200,
          }}
        >
          - (Student Assistant)Taught python, machine learning concepts and
          problem solving in python to school children organised under Computer
          Science department CSOutreach at The University of Texas at Dallas.
          <br />
        </p>
      </Container>
      <hr />
      <h3 style={{ textAlign: "center" }}>Backend Developer Intern</h3>
      <Container>
        <img
          src="/DigiLocker.svg.png"
          alt="digilocker"
          style={{
            width: 380,
            height: 100,
          }}
        />
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            marginLeft: 20,
          }}
        >
          DigiLocker is Government of India's cloud based platform for issuance
          & verification of documents & certificates. Worked under National
          e-governance division.
          <br />
          -worked on NoSQL database (MongoDB).
          <br />
          -created Flask REST APIs.
        </p>
      </Container>
      <hr />
    </AboutContainer>
  );
};

export default Experience;
