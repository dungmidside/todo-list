import React from 'react'
import { Layout } from './modules/common'
import { TodoList } from './modules/todolist'

export default class App extends React.Component {
	render() {
		return (
			<Layout>
				<TodoList />
			</Layout>
		);
	}
}