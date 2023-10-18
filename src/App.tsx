import React from "react";
import { Container } from "react-bootstrap";
import Routing from "./route";
import { Navbar } from "./components/navBar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

export default function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routing />
        </Container>
      </ShoppingCartProvider>
    </>
  );
}
