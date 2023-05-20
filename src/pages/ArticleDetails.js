import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../components/articleData';

const ArticleDetails = () => {
  const { index } = useParams();
  const articleIndex = parseInt(index);

  const article = articles[articleIndex];

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    
    <div style={{ background: "rgba(255, 255, 255, 0.75)", backdropFilter: "blur(20px)", margin: '2.5% auto', maxWidth: '1000px', padding: '40px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', }}>
  <h1 style={{ textAlign: 'center' }}>{article.title}</h1>
  <p style={{ textAlign: 'center' }}>{article.date}</p>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={article.imageUrl} alt="Article" style={{ maxHeight: '400px', width: 'auto', marginBottom: '1rem', borderRadius: '15px' }} />
  </div>
  <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
  <p style={{ color: "red", textAlign: 'center' }}>by {article.author}</p>
</div>

  );
};

export default ArticleDetails;
