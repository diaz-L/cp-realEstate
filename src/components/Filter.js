import React from 'react'

class Filter extends React.Component {
	render() {
		return (
			<section id='filter-section'>
				<div className='container'>
						  <h4 className="filter-title">Filter</h4>
						  <select className="location">
							  <option>Bronx County</option>
						  </select>

						  <select className="homeType">
							  <option>Apartment</option>
						  </select>
						  
						  <div>
							  <label htmlFor="search-price" className="search-price">Price</label>
							  <input id="search-price" type="range" min="500" max="3000" value="700" step="25" />
						  </div>
						  <div>
							  <label htmlFor="num-beds" className="num-beds">Beds</label>
							  <input id="num-beds" type='range' min='1' max="6" value="1" />
						  </div>

						  <div className="other-options">
							  <h4 className="filter-subtitle">More</h4>
							  <label htmlFor="pets">Pets allowed</label>
							  <input id="pets" type="checkbox" />
						  
							  <div className="divider"></div>

							  <label htmlFor="parking">On-site Parking</label>
							  <input id="parking" type="checkbox" />

							  <div className="divider"></div>

							  <label htmlFor="laundrymat">In-Unit Laundry</label>
							  <input id="" type="checkbox" />
						  </div>
				</div>
			</section>
		)
	}
}

export default Filter
