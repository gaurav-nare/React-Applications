import React from "react";

import "./app.scss";

import { Container, Row, Col } from "react-bootstrap";
import ArticleSection from "./Components/Articles/ArticleSection";

const App = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={9}>
          <h1 className="text-danger">Related Articles</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            lacus lacus. Mauris commodo eget leo vitae ullamcorper. Proin sed
            turpis mi. Nam viverra pharetra nibh ultricies rutrum. Integer
            vulputate tristique pellentesque. Etiam viverra dolor nec.
          </p>
        </Col>
      </Row>
      <ArticleSection />
    </Container>
  );
};

export default App;
