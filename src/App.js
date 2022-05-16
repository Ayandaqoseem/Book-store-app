import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/Auth/SignUp";
// import Welcome from "./components/Dashboard/Welcome";
import Dashboard from "../src/Pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
// import Login from "./Pages/login/Login";
// import List from "./Pages/list/List";
// import Single from "./Pages/single/Single";
// import New from "./Pages/new/New";
// import './main.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          
          {/* <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route> */}
        </Route>  
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path="/welcome" element={<Welcome />} /> */}
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
