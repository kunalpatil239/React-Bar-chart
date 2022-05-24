import Barchart from "./components/Barchart";

function App() {
  return (
    <div style={{ backgroundColor: "#edebeb", height: "100vh" }}>
      <h3
        style={{
          textTransform: "uppercase",
          padding: "3rem 2rem",
          fontWeight: "500",
        }}
      >
        Summery Of Engagement
      </h3>
      <div className="bar-holder">
        <Barchart />
      </div>
    </div>
  );
}

export default App;
