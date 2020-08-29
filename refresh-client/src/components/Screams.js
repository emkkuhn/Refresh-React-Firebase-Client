import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

//MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
	card: {
		display: 'flex',
		marginBottom: 20
	},
	image: {
		minWidth: 200,
	},
	content:{
		padding: 25,
		objectFit: 'cover',

	},
}

class Screams extends Component {
	render () {
		const { classes, scream : { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props
		return (
			<Card className={classes.card}>
				<CardMedia
					src="stop giving me errors"
					image={userImage}
					title="Profile image" className={classes.image}/>
					<CardContent className={classes.content}>
						<Typography  variants="h5" component={Link} to={`/users/${userHandle}`} color="primary">{userHandle} </Typography>
						<Typography  variants="body2" color="textSecondary">{JSON.stringify(createdAt)} </Typography>
						<Typography  variants="body1">{body} </Typography>
					</CardContent>


			</Card>
		)
	}
}

export default withStyles(styles)(Screams);