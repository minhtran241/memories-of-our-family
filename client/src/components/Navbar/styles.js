import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 50px",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
		backgroundColor: "white",
	},
	heading: {
		flex: 1,
		color: "#ffffff",
		textAlign: "left",
		paddingLeft: "10px",
		textDecoration: "none",
		fontSize: "45px",
	},
	image: {
		marginLeft: "10px",
		marginTop: "5px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		width: "400px",
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
	},
	avatar: {
		display: "flex",
		alignItems: "center",
		marginRight: "10px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
		paddingRight: "10px",
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
	},
	[theme.breakpoints.down("sm")]: {
		appBar: {
			padding: "10px 20px",
		},
		heading: {
			display: "none",
		},
		image: {
			display: "none",
		},
		userName: {
			display: "none",
		},
		avatar: {
			display: "none",
		},
		toolbar: {
			display: "flex",
			justifyContent: "flex-end",
			width: "160px",
		},
	},
}));
