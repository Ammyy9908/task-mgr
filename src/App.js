import "./App.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Button from "./Components/Buttons/Button";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
