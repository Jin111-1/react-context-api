import { useContext } from "react";
import { DataContext } from "../App";
function AppHeader() {
  const {username} = useContext(DataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {username} </h2>
    </div>
  );
}

export default AppHeader;
