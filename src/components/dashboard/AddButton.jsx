import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButon = ({ onGenerated }) => {
	return (
		<Box onClick={onGenerated} p={2}>
			<Fab
				color='primary'
				variant='extended'
				sx={{ position: "fixed", bottom: "20px", left: "20px" }}>
				<AddIcon />
			</Fab>
		</Box>
	);
};

export default AddButon;
