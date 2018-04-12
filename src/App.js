import React from 'react'
import { Layout } from './modules/common'
import { TodoApp } from './modules/todo'

export default class App extends React.Component {
	render() {
		return (
			<Layout>
				<TodoApp />
			</Layout>
		);
	}
}