import React from 'react'
import ReactDOM from 'react-dom'
//import 'normalize.css'
import Header from './Header.js'
import "../sass/style.scss"

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
