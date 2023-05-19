import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { articles } from '../components/articleData';
import { Link } from 'react-router-dom';

const truncateContent = (content, limit) => {
  if (content.length > limit) {
    return content.substring(0, limit) + '...';
  }
  return content;
};

const BlogArticles = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container>
        <Row>
          {articles.map((article, index) => (
            <Col key={index} sm={6}>
              <Link to={`/articles/${index}`} style={{ textDecoration: 'none' }}>
                <Card className="mb-4">
                  <div style={{ height: '300px', overflow: 'hidden' }}>
                    {article.imageUrl && (
                      <div
                        style={{
                          backgroundImage: `url(${article.imageUrl})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          height: '100%',
                        }}
                      />
                    )}
                  </div>
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{article.author}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
                    <Card.Text>{article.headlinetext}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogArticles;
