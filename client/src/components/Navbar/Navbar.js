import memories from "../../images/logo3.png";
import { useHistory, Link, useLocation } from "react-router-dom";
import {
	AppBar,
	Avatar,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import memoriesText from "../../images/textLogo4.png";

const Navbar = () => {
	const classes = useStyles();
	const history = useHistory();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decocedToken = decode(token);
			if (decocedToken.exp * 1000 < new Date().getTime())
				logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location, user?.token]);

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		history.push("/");
		setUser(null);
	};

	return (
		<AppBar className={classes.appBar} position="sticky">
			<Link to="/" className={classes.brandContainer}>
				{/* <Typography
					component={Link}
					to="/"
					className={classes.heading}
					variant="h2"
					align="center"
					style={{
						color: "#ec38bc",
						// fontWeight: "bold",
					}}
				>
					Memorist
				</Typography> */}
				<img
					component={Link}
					to="/"
					src={memoriesText}
					alt="icon"
					height="45px"
					style={{ marginLeft: "15px" }}
				/>
				<img
					className={classes.image}
					src={memories}
					alt="icon"
					height="60"
					style={{ width: "45px", height: "45px" }}
				/>
			</Link>
			<Toolbar
				className={classes.toolbar}
				sx={{ display: "inline" }}
			>
				{user ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.avatar}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography
							className={classes.userName}
							variant="h6"
							style={{
								color: "#03001e",
								marginRight: "20px",
							}}
						>
							{user.result.name}{" "}
						</Typography>
						<Button
							variant="contained"
							className={classes.logout}
							color="secondary"
							onClick={logout}
						>
							Logout &nbsp;
							<ExitToAppIcon fontSize="small" />
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
					>
						Login &nbsp;{" "}
						<DirectionsRunIcon fontSize="small" />
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
