import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButon = ({ onGenerated }) => {
	return (
		<Box onClick={onGenerated} mt='60vh' p={2}>
			<Fab color='primary' variant='extended'>
				<AddIcon />
			</Fab>
		</Box>
	);
};

export default AddButon;
