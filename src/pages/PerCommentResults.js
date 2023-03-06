import { useLocation } from "react-router-dom";
import { Table } from 'react-bootstrap';

function PerCommentResults() {
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  const commentsDictionary = data ? data["Comments Dictionary"] : null;
  // console.log(commentsDictionary);

  const tableData = commentsDictionary
    ? Object.keys(commentsDictionary).map((key) => ({
        comments: commentsDictionary[key]["rawcomment"],
        sentiment:
          commentsDictionary[key]["sentiment_predictions"] === 0
            ? "Negative"
            : commentsDictionary[key]["sentiment_predictions"] === 1
            ? "Neutral"
            : "Positive",
        sarcasm:
          commentsDictionary[key]["sarcasm_predictions"] === 0
            ? "Not sarcastic"
            : "Sarcastic",
        sentiresult:
          commentsDictionary[key]["sentitube_results"] === "negative"
            ? "Senti Negative"
            : commentsDictionary[key]["sentitube_results"] === "positive"
            ? "Senti Positive"
            : "Neutral",
      }))
    : [];

  function renderTable() {
    return (
      <div className="table-wrapper">
      <Table>
        <thead>
          <tr>
            <th scope="col">Comment</th>
            <th scope="col">Sentiment</th>
            <th scope="col">Sarcasm</th>
            <th scope="col">SentiResults</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.comments}</td>
              <td>{data.sentiment}</td>
              <td>{data.sarcasm}</td>
              <td>{data.sentiresult}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }

  return (
    <div className="Per_Comment_Results">
      <h4>Overall results for each comment</h4>
      <div>{renderTable()}</div>
    </div>
  );
}

export default PerCommentResults;
