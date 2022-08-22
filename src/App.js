import "./App.css";
import HomeWork01 from "./components/HomeWork01";
import HomeWork02 from "./components/HomeWork02";
import HomeWork03 from "./components/HomeWork03";
import HomeWork04 from "./components/HomeWork04";
import HomeWork05 from "./components/HomeWork05";
import GiaoDien from "./components/GiaoDien";
function App() {
  return (
    <div>
      <GiaoDien></GiaoDien>
      <div className="container">
        <div className="row">
          <HomeWork04></HomeWork04>
        </div>
      </div>
    </div>
  );
}

export default App;
