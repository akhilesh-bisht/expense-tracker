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
import axios from "axios";

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log("Auth User:", authUser);

  const handleLogout = async () => {
    try {
      await axios.post("/api/user/logout"); //
      localStorage.removeItem("userInfo");

      setAuthUser(null);

      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      alert("An unexpected error occurred!");
    }
  };

  return (
    <div className="App w-full">
      <div className="container max-w-6xl text-center drop-shadow-lg text-gray-800 mx-auto">
        <h1 className="text-4xl py-4 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>

        {authUser && (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
          >
            Logout
          </button>
        )}

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                <div className="md:grid md:grid-cols-2 gap-4 flex flex-col items-center">
                  <Graph />
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
