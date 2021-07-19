import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex space-x-4 bg-blue-600 w-full h-12 items-center justify-start px-4 text-white">
      <div className="hover:bg-white px-8 transition ease-linear duration-500 hover:text-blue-400 h-full flex items-center cursor-pointer">
        home
      </div>
      <div className="hover:bg-white px-8 transition ease-linear duration-500 hover:text-blue-400 h-full flex items-center cursor-pointer">
        home
      </div>
      <div className="hover:bg-white px-8 transition ease-linear duration-500 hover:text-blue-400 h-full flex items-center cursor-pointer">
        home
      </div>
    </div>
  );
}

export default App;
