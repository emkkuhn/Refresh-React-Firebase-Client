import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Scream from '../components/Screams'

class home extends Component {
	state = {
		screams: []
	}
	componentDidMount(){
		axios.get('/screams')
			.then(res => {
				console.log(res.data)
				this.setState({
					screams: res.data
				})
			})
			.catch(err => console.log(err));

	}
	render () {
		let screamsVariable = this.state.screams
		let recentScreamsMarkup = screamsVariable ? (
			screamsVariable.map((scream) => <Scream key={scream.screamId} scream={scream} />)
			) : (
			<p>Loading...</p>
			)
		return (
			<Grid container wrap={'nowrap'} spacing={16}>
				<Grid item sm={8} xs={12}>
					{recentScreamsMarkup}
				</Grid>
				<Grid item sm={8} xs={12}>
					<p> Profile.... </p>
				</Grid>
			</Grid>
		);
	}
}

export default home;