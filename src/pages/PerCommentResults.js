import { useLocation } from "react-router-dom";

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
            : "-",
      }))
    : [];

  function renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Comment</th>
            <th>Sentiment</th>
            <th>Sarcasm</th>
            <th>SentiResults</th>
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
      </table>
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
