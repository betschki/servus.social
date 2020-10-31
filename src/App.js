import React from "react";
import { Helmet } from "react-helmet";
import { Container, Button } from "reactstrap";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./components/Features";
import Report from "./components/Report";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          async
          defer
          data-domain="servus.social"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
      <TopBar color="yellow" />
      <Container>
        <Navigation />
        <Header />
      </Container>
      <Features />
      <Report />
      <Footer />
    </>
  );
}

export default App;
