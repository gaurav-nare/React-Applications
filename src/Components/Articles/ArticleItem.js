import React from 'react';
import { Card } from 'react-bootstrap';

const colorMap = [
    'warning',
    'info',
    'success',
]

/**
 * @desc
 * @param {integer} index 
 */
const getColor = (index) => `bg-${colorMap[index%3]}`;

const ArticleItem = ({id, index, timeStamp, title, description, url}) => {
    return(
        <Card className={`article-card h-100 text-white ${getColor(index)}`}>
            <Card.Body className="d-flex flex-column">
                <div className="date font-weight-bold mb-3">{timeStamp}</div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>                
            <Card.Footer className="border-top-0 pb-3 bg-transparent">
                <Card.Link href={url} className="text-uppercase font-weight-bold text-white border border-white p-2 rounded">Read more</Card.Link>
            </Card.Footer>
        </Card>
    )
}

export default ArticleItem;