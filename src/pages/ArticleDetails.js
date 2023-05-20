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
    <div style={{ background: "rgba(255, 255, 255, 0.75)",backdropFilter: "blur(20px)", margin:'48px', padding:'40px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',}}>
      <h1><center>{article.title}</center></h1>
      <p><center>{article.date}</center></p>
      <center><img src={article.imageUrl} alt="Article" style={{ height: '400px', marginBottom: '1rem', borderRadius: '15px',}} /></center> 
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <p style={{color:"red"}}>by {article.author}</p>
    </div>
  );
};

export default ArticleDetails;
