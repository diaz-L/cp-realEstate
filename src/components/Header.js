import React from 'react'

class Header extends React.Component {
	render() {
		return (<header>
			<div className="container">
			  <div>Logo</div>
			  <nav>
				  <a href="#">Create Ads</a>
				  <a href="#">About us</a>
				  <a href="#">Log In</a>
				  <a href="#" className="register-btn">Register</a>
			  </nav>
			</div>
		</header>)
	}
}

export default Header
