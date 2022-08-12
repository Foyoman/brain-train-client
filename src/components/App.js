import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Typer from "./Typer"

function App() {
  return (
<<<<<<< HEAD
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route path="/update-profile" 
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                } 
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/proto-type" element={<Typer />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  )
=======
    <div className="App">


      <h1>Werds</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/proto-type">proto-type</Link>
      </nav>
      <Outlet />

    </div>
  );
>>>>>>> e1fe955a1160fe1b3d4aba17d2f9780af6f59791
}

export default App

// import React from "react"
// import { Container } from 'react-bootstrap';
// import { Outlet, Link } from 'react-router-dom';

// function App() {
//   return (
//     <Container style={{ maxWidth: "960px" }}>
//       <div className="App">
//         <h1>Werds</h1>
//         <nav
//           style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}
//         >
//           <Link to="/">Home</Link> |{" "}
//           <Link to="/dashboard">Dashboard</Link> |{" "}
//           <Link to="/signup">Sign Up</Link> |{" "}
//           <Link to="/login">Log In</Link> |{" "}
//           <Link to="/proto-type">proto-type</Link>
//         </nav>
//         <Outlet />
//       </div>
//     </Container>
//   );
// }

// export default App;
