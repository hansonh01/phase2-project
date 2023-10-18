import {
	Card,
	CardHeader,
	Grid,
	Box,
	TextField,
	CardContent,
	Divider,
	CardActions,
	Button,
} from "@mui/material";
import { useState } from "react";

const PatientsInfo = ({ patient, background }) => {
	const [data, setData] = useState(patient);

	return (
		<form autoComplete='off' noValidate>
			<Card elevation={4} sx={{ bgcolor: background }}>
				<CardHeader subheader='The information can be edited' title='Profile' />
				<CardContent>
					<Box>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									helperText='Please specify the first name'
									label='First name'
									name='first'
									onChange={(e) => setData(e.target.value)}
									required
									value={data.name.first}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label='Last name'
									name='last'
									onChange={(e) => setData(e.target.value)}
									required
									value={data.name.last}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label='Email Address'
									name='email'
									onChange={(e) => setData(e.target.value)}
									required
									value={data.email}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label='Phone Number'
									name='phone'
									onChange={(e) => setData(e.target.value)}
									value={data.phone}
								/>
							</Grid>
						</Grid>
					</Box>
				</CardContent>
				<Divider />
				<CardActions sx={{ justifyContent: "flex-end" }}>
					<Button variant='contained'>Save details</Button>
				</CardActions>
			</Card>
		</form>
	);
};
export default PatientsInfo;
