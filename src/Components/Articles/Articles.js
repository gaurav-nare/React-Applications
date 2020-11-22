import React from 'react';
import { Col } from 'react-bootstrap';
import ArticleItem from './ArticleItem';


const renderChildren = (data) => {
    return data.map((item, index) => {
    return (
            <Col md={4} className="mb-4" key={item.id}>
                <ArticleItem {...item} index={index+1} />
            </Col>
        )
    })
}

const Articles = ({data}) => renderChildren(data)

export default Articles;