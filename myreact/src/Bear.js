import React, { Component } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'

// Source code:  https://gist.github.com/wwarodom/f27e0903ed3a12cd2360dea88d53c295

class Bear extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			weight: ''
		}
	}

	componentDidMount() {
		// this.getAllBears()
		this.props.fetchBears()
	}
	//
	// getAllBears() {
	// 	axios.get('http://localhost/api/bears')
	// 		.then( (response) => {
	// 			this.setState( {bears: response.data} )
	// 		})
	// }

	renderBears() {
		if (Object.keys(this.props.bears).length !== 0)
			return this.props.bears.map(
				(bear, index) =>
					(<li key={index}>{bear.id}:{bear.name}:{bear.weight}</li>)
			)
	}

	handleChange = event => {
		const { name , value} = event.target
		this.setState({
			[name]: value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		const { name, weight} = this.state
		const user = {
			name,
			weight
		};

		this.props.addBears(user, () => {
			this.props.fetchBears();
		});
	}

	render() {
		return (
			<div>
				<h1> Bear </h1>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Name:
            				<input type="text" name="name" onChange={this.handleChange} />

						</label>
						<label>
							Weight:
							<input type="text" name="weight" onChange={this.handleChange} />
						</label>
						<button type="submit">Add</button>
					</form>
				</div>
				<ul> {this.renderBears()} </ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { bears: state.bears }
}

export default connect(mapStateToProps, actions)(Bear)