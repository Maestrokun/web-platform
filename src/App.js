/* eslint-disable */
import { Outlet } from "react-router-dom";
import Routes from "./routes/index";

function App() {
  return (
    <div>
      <Routes />
      <Outlet />
    </div>
  );
}

export default App;
