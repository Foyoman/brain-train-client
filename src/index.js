import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import { 
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import { AuthProvider } from './contexts/AuthContext';
// import Typer from './components/Typer';
// import Signup from './components/Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<App />}>
//       <Route path="/proto-type" element={<Typer />} />
//       <Route path="/signup" element={<AuthProvider><Signup /></AuthProvider>} />
//       <Route path="/login" element={<AuthProvider><Login /></AuthProvider>} />
//       <Route exact path="/dashboard" 
//         element={
//           <PrivateRoute>
//             <AuthProvider><Dashboard /></AuthProvider>
//           </PrivateRoute>
//         } 
//       />
//       <Route
//         path="*"
//         element={
//           <main style={{ padding: "1rem "}}>
//             <h1>404: page not found</h1>
//             <p>Go somewhere else</p>
//           </main>
//         }
//       />
//     </Route>
//   </Routes>
// </BrowserRouter>
// );

