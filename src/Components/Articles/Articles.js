import React, { memo } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import ArticleItem from "./ArticleItem";

const propTypes = {
  /** Data for article card. */
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

const renderChildren = (data) => {
  return data.map((item, index) => {
    return (
      <Col md={4} className="mb-4" key={item.id}>
        <ArticleItem data={item} index={index + 1} />
      </Col>
    );
  });
};

const Articles = memo(({ data }) => renderChildren(data));

Articles.propTypes = propTypes;
Articles.displayName = "Articles";

export default Articles;
