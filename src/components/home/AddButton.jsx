// import { Box, Fab } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { parseGeneratedPatient } from "../../assets/database/RequestMethods";
// const AddButton = () => {
// 	return (
// 		<Box pt='60vh'>
// 			{/* <Fab
// 				color='primary'
// 				variant='extended'
// 				onClick={parseGeneratedPatient}>
// 				<AddIcon sx={{ mr: 1 }} />
// 			</Fab> */}
// 		</Box>
// 	);
// };

// export default AddButton;
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import usePatients from "../data/usePatients";

const AddButon = () => {
	const { handleGeneratedPatient } = usePatients();
	return (
		<Box onClick={handleGeneratedPatient} mt='60vh' p={2}>
			<Fab color='primary' variant='extended'>
				<AddIcon />
			</Fab>
		</Box>
	);
};

export default AddButon;
