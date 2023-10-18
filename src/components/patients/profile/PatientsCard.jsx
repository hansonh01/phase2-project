import {
	Card,
	CardContent,
	Box,
	Avatar,
	Typography,
	Divider,
	CardActions,
	Button,
} from "@mui/material";

const PatientsCard = ({ patient, background }) => {
	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	const gender = capitalizeFirstLetter(patient.gender);
	return (
		<Card elevation={4} sx={{ bgcolor: background }}>
			<CardContent>
				<Box
					sx={{
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}>
					<Avatar src={patient.picture.large} sx={{ height: 88, mb: 2, width: 80 }} />
					<Typography gutterBottom variant='h5'>
						{`${patient.name.first} ${patient.name.last}`}
					</Typography>
					<Typography color='text' variant='body2'>
						{gender}
					</Typography>
					<Typography color='text' variant='body2'>
						{`ID: ${patient.id}`}
					</Typography>
				</Box>
			</CardContent>
			<Divider />
			<CardActions>
				<Button fullWidth variant='text'>
					Upload New Picture
				</Button>
			</CardActions>
		</Card>
	);
};
export default PatientsCard;
