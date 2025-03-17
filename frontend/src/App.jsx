import "./App.css";
import Graph from "./components/Graph.jsx";
import Form from "./components/Form";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  const { authUser } = useAuth();

  return (
    <div className="App w-full">
      <div className="container max-w-6xl text-center drop-shadow-lg text-gray-800 mx-auto">
        <h1 className="text-4xl py-4 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                <div className="md:grid md:grid-cols-2 gap-4 flex flex-col items-center">
                  {/* Chart */}
                  <Graph />
                  {/* Form */}
                  <Form />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
