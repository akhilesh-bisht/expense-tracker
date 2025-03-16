import "./App.css";
import Graph from "./components/Graph.jsx";
import Form from "./components/Form";

function App() {
  return (
    <div className="App w-full">
      <div className="container  max-w-6xl text-center drop-shadow-lg text-gray-800 mx-auto">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded ">
          Expense Tracker
        </h1>

        {/* grid columns */}
        <div className="md:grid md:grid-cols-2 gap-4 flex flex-col items-center">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
