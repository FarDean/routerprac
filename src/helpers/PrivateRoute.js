import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
	const { isAuthenticated, isLoading } = useAuth0();
	if (isLoading) return <div>...is Loading...</div>;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
