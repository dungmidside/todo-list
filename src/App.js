import React from 'react'
import { Layout } from './modules/common'
import { TodoApp, Home } from './modules/todo'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

export default class App extends React.Component {
	render() {
		return (
			<Layout>
				<Router>
					<div>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/app">App</Link></li>
						</ul>

						<Route exact path="/" component={Home} />
						<Route exact path="/app" component={TodoApp} />
					</div>
				</Router>
			</Layout>
		);
	}
}