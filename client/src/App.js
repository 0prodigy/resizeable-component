import "./App.css";
import ResizableBox from "./Components/ResizableBox";

function App() {
  return (
    <div className="App">
      <div className="flex-row">
        <ResizableBox>Something to say</ResizableBox>
        <ResizableBox initWidth={400} initHeight={200}>
          Something Else to say
        </ResizableBox>
      </div>
      <div className="flex-row">
        <ResizableBox initWidth={900} initHeight={400}>
          Something Else to say
        </ResizableBox>
      </div>
    </div>
  );
}

export default App;
