import React, { useState } from "react";
import { Collapse, Button, Row } from "react-bootstrap";

import Articles from "./Articles";
import ArticleData from "./data";

const ArticleSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Row>
        <Articles data={ArticleData.slice(0, 3)} />
      </Row>
      <Collapse in={open}>
        <Row id="example-collapse-text">
          <Articles
            id="example-collapse-text"
            data={ArticleData.slice(3, ArticleData.length)}
          />
        </Row>
      </Collapse>
      <div className="text-center mb-4">
        <Button
          variant="outline-danger"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="font-weight-bold text-uppercase p-3"
        >
          {open ? "Read Less" : "Read More"}
        </Button>
      </div>
    </>
  );
};

export default ArticleSection;
