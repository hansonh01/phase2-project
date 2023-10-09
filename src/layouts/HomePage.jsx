import { Fragment } from "react";
import { Box } from "@mui/material";
import Headers from "../components/headers/Headers";
import AddButton from "../components/home/AddButton";

const HomePage = () => {
	return (
		<Fragment>
			<Box m='20px'>
				<Headers
					title='PHASE 2'
					subtitle='Welcome to my Project for Phase 2!!'
				/>
			</Box>
			<AddButton />
		</Fragment>
	);
};

export default HomePage;
