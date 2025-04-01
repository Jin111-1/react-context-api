import { useContext } from "react";
import { userDataContext } from "../App";



function AppHeader() {

  const userData = useContext(userDataContext)
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <div>
      <h2>สวัสดีคุณ {userData.username}</h2>
      <img src={userData.avatar}/>
      </div>
      
    </div>
  );
}

export default AppHeader;
