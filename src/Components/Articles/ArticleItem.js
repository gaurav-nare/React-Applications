import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import getColor from "../../utils/getColor";

const propTypes = {
  /** Data for article card. */
  data: PropTypes.exact({
    /** Id of the article card */
    id: PropTypes.number,
    /** Timestamp of the article card */
    timeStamp: PropTypes.string,
    /** Title of the article card */
    title: PropTypes.string,
    /** Description of the article card */
    description: PropTypes.string,
    /** Url of the article card */
    url: PropTypes.string
  }).isRequired,
  /** index of the article card */
  index: PropTypes.number
};

const defaultProps = {
  index: 0
};

const ArticleItem = ({ data, index }) => {
  const { timeStamp, title, description, url, id } = data;

  return (
    <Card
      className={`article-card h-100 text-white ${getColor(index)}`}
      data-id={id}
    >
      <Card.Body className="d-flex flex-column">
        <div className="date font-weight-bold mb-3">{timeStamp}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-top-0 pb-3 bg-transparent">
        <Card.Link
          href={url}
          className="text-uppercase font-weight-bold text-white border border-white p-2 rounded"
        >
          Read more
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

ArticleItem.propTypes = propTypes;
ArticleItem.defaultProps = defaultProps;

export default ArticleItem;
