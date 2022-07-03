import { useState } from "react";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import useStyles from "./styles";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { AUTH } from "../../constants/actionTypes";
import { useHistory } from "react-router";
import { signin, signup } from "../../actions/auth";

const Auth = () => {
	const classes = useStyles();
	const history = useHistory();
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const dispatch = useDispatch();
	const [formData, setFormData] = useState(initialState);
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
	const [isSignup, setIsSignup] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};
	// GOOGLE AUTH
	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;
		try {
			dispatch({ type: AUTH, data: { result, token } });
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	const googleFailure = async (error) => {
		alert("Google Login Unsuccessful. Try Again Later ☹️");
	};
	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">
					{isSignup ? "Sign Up" : "Sign In"}
				</Typography>
				<form
					className={classes.form}
					onSubmit={handleSubmit}
				>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name="confirmPassword"
								label="Repeat Password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignup ? (
							<PersonAddIcon />
						) : (
							<DirectionsRunIcon />
						)}
					</Button>
					{!isSignup && (
						<GoogleLogin
							clientId="768153121736-d0unvus1n22eg89mck498qgoqo6jt4mi.apps.googleusercontent.com"
							render={(renderProps) => (
								<Button
									className={classes.googleButton}
									color="primary"
									fullWidth
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
									startIcon={<Icon />}
									variant="contained"
								>
									Google Sign In
								</Button>
							)}
							onSuccess={googleSuccess}
							onFailure={googleFailure}
							cookiePolicy="single_host_origin"
						/>
					)}
					<Grid container justifyContent="center">
						<Grid item>
							<Button
								onClick={switchMode}
								style={{
									textDecoration: "underline",
								}}
							>
								{isSignup
									? "Already have an account? Sign In!"
									: "Don't have an account? Sign Up!"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
