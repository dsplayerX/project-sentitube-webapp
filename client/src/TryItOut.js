import "./TryItOut.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>SentiTube</h1>
        <p>Your online sentiment analysis service</p>
      </header>
      <main>
        <form>
          <label htmlFor="video-url">Video URL:</label>
          <input type="text" id="video-url" name="video-url" />
          <button type="submit">Analyze</button>
        </form>
      </main>
      <footer>
        <p>&copy; 2023 SentiTube</p>
      </footer>
    </div>
  );
}

export default App;
