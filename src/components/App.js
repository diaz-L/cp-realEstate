import React from 'react'
import ReactDOM from 'react-dom'
//import 'normalize.css'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import "../sass/style.scss"

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Header />
				<main id='content-area'>
					<Filter />
					<Listings />
				</main>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
