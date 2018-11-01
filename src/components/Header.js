import React from 'react'

class Header extends React.Component {
	render() {
		return (<header>
			<div className="container">
			  <div>Logo</div>
			  <nav>
				  <a href="#" className="nav-item">Create Ads</a>
				  <a href="#" className="nav-item">About us</a>
				  <a href="#" className="nav-item">Log In</a>
				  <a href="#" className="nav-item">Register</a>
			  </nav>
			</div>
		</header>)
	}
}

export default Header
