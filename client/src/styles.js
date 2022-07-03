import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage:
			"linear-gradient(200deg, rgba(0, 0, 0, 1), rgba(177, 41, 141, 1))",
	},
	heading: {
		color: "white",
		fontSize: "30px",
	},
	image: {
		marginLeft: "15px",
	},
	[theme.breakpoints.down("sm")]: {
		mainContainer: {
			flexDirection: "column-reverse",
		},
	},
}));
