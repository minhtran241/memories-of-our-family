import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
// import reducers from '../../reducers';

const Posts = ({ setCurrentId }) => {
	const classes = useStyles();
	const { posts, isLoading } = useSelector((state) => {
		return state.posts;
	}); // [] -> {posts: [], ...}

	if (!posts.length && !isLoading) {
		return "No posts";
	}

	return isLoading ? (
		<LinearProgress style={{ backgroundColor: "white" }} />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems="stretch"
			spacing={3}
		>
			{posts.map((post) => (
				<Grid
					key={post._id}
					xs={12}
					sm={12}
					md={6}
					lg={3}
					item
				>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
