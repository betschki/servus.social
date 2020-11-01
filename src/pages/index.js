import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "reactstrap";
import TopBar from "../components/TopBar";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Features from "../components/Features";
import Report from "../components/Report";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          async
          defer
          data-domain="servus.social"
          src="https://stats.servus.social/js/index.js"
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
