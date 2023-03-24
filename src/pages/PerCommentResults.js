import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";

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
            ? "SentiNegative"
            : commentsDictionary[key]["sentitube_results"] === "positive"
            ? "SentiPositive"
            : "Neutral",
      }))
    : [];

  function renderTable() {
    return (
      <div className="table-wrapper">
        <Table>
          <thead>
            <tr className="title-column">
              <th scope="col" style={{ width: "70%" }}>
                Comment
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Sentiment
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Sarcasm
              </th>
              <th scope="col" style={{ width: "10%" }}>
                SentiResults
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="comment-column">{data.comments}</td>
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
    <div
      className="Per_Comment_Results"
      style={{
        backdropFilter: "blur(20px)",
        background: "rgba(255, 255, 255, 0.75)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2>
        <b>Per Comment Analysis Results</b>
      </h2>
      <div>{renderTable()}</div>
    </div>
  );
}

export default PerCommentResults;
