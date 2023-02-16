import React, { useEffect, useState } from "react";

function PerCommentResults() {
  const [data, setdata] = useState({
    comments_list: "",
    sentiment_list: "",
    sarcasm_list: "",
  });

  useEffect(() => {
    fetch("/results").then((res) =>
      res.json().then((data) => {
        setdata({
          comments_list: data.Comments_list,
          sentiment_list: data.Sentiment_list,
          sarcasm_list: data.Sarcasm_list,
        });
      })
    );
  }, []);

  const tableData = [];
  for (let i = 0; i < data.comments_list.length; i++) {
    tableData.push({
      comments: data.comments_list,
      sentiment: data.sentiment_list,
      sarcasm: data.sarcasm_list,
    });
  }

  return (
    <div className="resultpage1">
      <h4>Overall results for each comments</h4>

      <table>
        <thead>
          <tr>
            <th>Comment</th>
            <th>Sentiment Result</th>
            <th>Sarcasm Result</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.comments}</td>
              <td>{data.sentiment}</td>
              <td>{data.sarcasm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PerCommentResults;
