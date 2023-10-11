import { Fragment } from "react";
import { Box } from "@mui/material";
import Headers from "../components/headers/Headers";
import AddButton from "../components/home/AddButton";
import Dashboard from "../components/home/Dashboard";

const HomePage = ({ onGenerated }) => {
	return (
		<Fragment>
			<Box m='20px'>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Headers title='PHASE 2' subtitle='Welcome to my Project for Phase 2!!' />
				</Box>
			</Box>
			<Dashboard />
			<AddButton onGenerated={onGenerated} />
		</Fragment>
	);
};

export default HomePage;
