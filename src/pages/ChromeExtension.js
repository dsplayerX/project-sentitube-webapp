import React from "react";

function ChromeExtension() {
  return (
    <div className="chrome-page">
      <h3 style={{ color: "black" }}>
        Chrome Extention is not yet published to Chrome Web Store. <br />
      </h3>
      <h5 style={{ color: "black" }}>
        <center>
          You can still download the unpacked SentiTube Extension and install it
          for yourself.
        </center>
      </h5>

     <div className="chrome-list"
      style={{
        margin: "0 auto",
          width: "80%",
          backgroundColor: "white",
          marginTop: "70px",
          padding: "20px 10px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(245,245,245,0.5)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
     >

     <h5>How to install the SentiTube Extension</h5>

      <li>
        Download the SentiTube Chrome Extension ZIP file from{" "}
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1fSAQV0LuZo4JDrUrVtMVrCeAR4sVsdWy/view?usp=sharing"
        >
          here
        </a>
        .
      </li>
      <li>
        After downloading the ZIP file, go to Chrome browser's Settings {">"}{" "}
        Extensions and turn on "Developer mode".
      </li>
      <li>
        Then Drag and Drop the ZIP file into the Extension page to install the
        extension.
      </li>
      <li>You can pin the extension to the title bar for easy access!</li>
      <li>
        Read the{" "}
        <a
          target="_blank"
          href="https://howover.com/install-chrome-extension-files-chrome-browser"
        >
          full guide here
        </a>{" "}
        on how to install the extension in your own chrome browser.
      </li>

     </div>
    </div>
  );
}

export default ChromeExtension;
