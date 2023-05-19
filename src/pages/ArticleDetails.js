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
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.date}</p>
      <img src={article.imageUrl} alt="Article" style={{ maxWidth: '100%', marginBottom: '1rem' }} />
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
};

export default ArticleDetails;
