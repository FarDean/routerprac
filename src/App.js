import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Protected from "./components/Protected";
import Home from "./components/Home";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
	const { user, isAuthenticated, isLoading, logout } = useAuth0();
	if (isLoading) {
		return <div>Loading ...</div>;
	}
	return (
		<div className="App">
			<h1>kos</h1>
			<Router>
				<Link to="/protected">protectd</Link>
				<Link to="/">Home</Link>
				{isAuthenticated ? (
					<div>
						<img src={user.picture} alt={user.name} />
						<h2>{user.name}</h2>
						<p>{user.email}</p>
						<button onClick={() => logout({ returnTo: window.location.origin })}>
							Log Out
						</button>
					</div>
				) : (
					<Link to="/login">Login</Link>
				)}

				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/protected">
						<Protected />
					</PrivateRoute>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
