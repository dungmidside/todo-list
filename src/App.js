import React from 'react'
import { Layout } from './modules/common'
import { Todo } from './modules/todo'

export default class App extends React.Component {
	render() {
		return (
			<Layout>
				<Todo />
			</Layout>
		);
	}
}