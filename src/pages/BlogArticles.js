import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BlogArticles = () => {
  // Sample data for articles
  const articlesLeft = [
    {
      title: 'Lorem Ipsum',
      author: 'John Doe',
      date: 'May 18, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    },
    {
      title: 'Article with Image',
      author: 'Jane Smith',
      date: 'May 19, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    // Add more articles as needed
  ];

  const articlesRight = [
    {
      title: 'Lorqweqweqweem Ipsum',
      author: 'John Doe',
      date: 'May 18, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetuqweqwe qweqweqweqw eqw eqw qw qwewqeqwsadf s fdw gfwra geal; bnw; GUBWIpgbnwrbgopwurbn g[o0wr gWORG NWRGO[RWB GNORA[PGNEG [OESNH[LEFG[g dno[jgfero[gnjerg[opwreag n go[[nrwgowege qweqw lorenr adipiscing elit...',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    },
    {
      title: 'Artqwewqeicle with Image',
      author: 'Jane Smith',
      date: 'May 19, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    },
    // Add more articles as needed
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col>
            {articlesLeft.map((article, index) => (
              <Card key={index} className="mb-4">
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
                  <Card.Text>{article.content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col>
            {articlesRight.map((article, index) => (
              <Card key={index} className="mb-4">
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
                  <Card.Text>{article.content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogArticles;
