import React from "react";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import ContainerCard from "./component/ContainerCard";

const App = () => {
  return (
    <Container className="text-center mt-5 ">
      <Header />
      <ContainerCard />
    </Container>
  );
};

export default App;
