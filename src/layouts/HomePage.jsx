import { Fragment } from "react";
import { Box } from "@mui/material";
import Headers from "../components/headers/Headers";
import AddButton from "../components/home/AddButton";

const HomePage = ({ onGenerated }) => {
	return (
		<Fragment>
			<Box m='20px'>
				<Headers
					title='PHASE 2'
					subtitle='Welcome to my Project for Phase 2!!'
				/>
			</Box>
			<AddButton onGenerated={onGenerated} />
		</Fragment>
	);
};

export default HomePage;
