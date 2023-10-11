import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";

import Contacts from "./pages/Contacts";
import Fishing from "./pages/Fishing";
import Hunting from "./pages/Hunting";
import Library from "./pages/Liblary";


const App = () => {



  return (
    <>
      <NavBar />
  

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "1500px" }}>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/fishing" element={<Fishing/>}/>
            <Route path="/hunting" element={<Hunting/>}/>
            <Route path="/liblary" element={<Library/>}/>
            <Route path="/contacts" element={<Contacts/>}/>

          </Routes>
        </div>
      </Container>
    </>
  );
};

export default App;
