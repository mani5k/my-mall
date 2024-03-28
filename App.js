import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./action/userAction";
import "./style/common.style.css";
import AppLayout from "./Layout/AppLayout";
import AppRouter from "./routes/AppRouter";
import { response } from "express";

// fetch('http://localhost:5000/')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('Error:', error));
  
function App() {
  return (
    <div>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  );
}

export default App;
