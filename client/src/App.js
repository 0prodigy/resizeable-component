import "./App.css";
import ContentContainer from "./Components/ContentContainer";
import ResizableBox from "./Components/ResizableBox";

function App() {
  return (
    <div className="App">
      <div className="flex-row">
        <ResizableBox>
          <h2>Resize Me</h2>
        </ResizableBox>
        <ResizableBox initWidth={400} initHeight={300}>
          <ContentContainer />
        </ResizableBox>
      </div>
      <div className="flex-row">
        <ResizableBox initWidth={900} initHeight={400}>
          <h2>Resize Me</h2>
        </ResizableBox>
      </div>
    </div>
  );
}

export default App;
