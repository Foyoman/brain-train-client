import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav
			style={{
				borderBottom: "solid 1px",
				paddingBottom: "1rem",
			}}
		>
			<Link to="/">Home</Link> |{" "}
			<Link to="/dashboard">Dashboard</Link> |{" "}
			<Link to="/signup">Sign Up</Link> |{" "}
			<Link to="/login">Log In</Link> |{" "}
			<Link to="/proto-type">proto-type</Link>
		</nav>
	)
}