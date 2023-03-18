import React from "react";

function SentiTubeLogic() {
  return (
    <div>
      <h1>Logic of SentiTube</h1>
      <p>
        SentiTube is an sentiment analysis tool that categorizes statements
        based on their sentiment and sarcasm. The sentiments can be positive
        (SentiPositive) or negative (SentiNegative), depending on the overall
        sarcastic tone of the statement.
      </p>
      <h5>Positive Sentiments</h5>
      <p>
        A statement that expresses positive sentiment without sarcasm could be
        classified as clearly positive. A statement that expresses positive
        sentiment but with sarcasm could be classified as negative, depending on
        the degree of sarcasm.
      </p>
      <h5>Negative Sentiments</h5>

      <p>
        A statement that expresses negative sentiment without sarcasm could be
        classified as clearly negative. A statement that expresses negative
        sentiment but is sarcastic is generally not considered a positive
        statement. Instead, it is considered a negative statement with a
        sarcastic tone. Sarcasm is often used to express negative sentiment in
        an indirect or ironic way, but the overall sentiment of the statement is
        still negative.
      </p>
      <h5>Neutral Statements</h5>
      <p>
        A statement that is neutral in sentiment and not sarcastic should be
        classified as neutral. A statement that is neutral in sentiment but
        sarcastic could be classified as negative or neutral, depending on the
        degree of sarcasm. (This is not yet taken into account in SentiTube and
        will be implemented with more research and more accurate models down the
        road.)
      </p>
    </div>
  );
}

export default SentiTubeLogic;
