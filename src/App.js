import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Protected from "./components/Protected";
import Home from "./components/Home";
function App() {
	return (
		<div className="App">
			<h1>kos</h1>
			<Router>
				<Link to="/protected">protectd</Link>
				<Link to="/">Home</Link>
				<Switch>
					<Route path="/protected">
						<Protected />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
