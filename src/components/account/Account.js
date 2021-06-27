import react from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Goku from '../images/Goku.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}));

const Account = () => {
	const classes = useStyles();

	return (
		<div className="account">
			<div className="account__box">
				<div className={classes.root}>
					<Avatar
						alt="goku"
						src={Goku}
						className={classes.small}
					></Avatar>
				</div>
				<span className="account__text">Ashish Ranjan</span>
			</div>
		</div>
	);
};

export default Account;
