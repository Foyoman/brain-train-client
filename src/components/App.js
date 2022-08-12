import { Outlet, Link } from "react-router-dom";

function App() {
  return (
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
}

export default App;