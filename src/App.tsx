import React from "react";
import { Container } from "react-bootstrap";
import Routing from "./route";
import { Navbar } from "./components/navBar";

export default function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routing />
    </Container>
    </>

  );
}
