import {
	useTheme,
	Box,
	Select,
	MenuItem,
	Button,
	Typography,
	Modal,
	InputLabel,
	FormControl,
} from "@mui/material";
import { tokens } from "../../assets/theme/theme";
import { Fragment, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AddApp = ({ patients, onAddApp }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [selected, setSelected] = useState("");
	const [examType, setExamType] = useState("");
	const [examDate, setExamDate] = useState(null);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const handleSubmit = () => {
		const newAppointment = {
			exam: examType,
			title: `${examType} for ${selected.name.first}`,
			date: examDate ? examDate.format("YYYY-MM-DD HH:mm") : "",
		};
		if (selected !== "" && examType !== "" && examDate !== null) {
			onAddApp(selected.id, newAppointment);
		}
	};

	return (
		<Fragment>
			<Button
				onClick={handleOpen}
				variant='contained'
				sx={{ bgcolor: colors.success.main }}>
				<Typography variant='h6' fontWeight='bold'>
					SETUP APPOINTMENTS
				</Typography>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				sx={{ maxHeight: "60vh", overflowY: "auto" }}>
				<Box sx={style}>
					<form onSubmit={handleSubmit}>
						<Box display='grid' gap='20px'>
							<FormControl>
								<InputLabel id='select-patient'>
									Select Patient
								</InputLabel>
								<Select
									name='patients'
									fullWidth
									labelId='select-patient'
									id='patient'
									variant='filled'
									value={selected}
									onChange={(e) =>
										setSelected(e.target.value)
									}>
									{patients.map((patient) => (
										<MenuItem
											value={patient}
											key={patient.id}>
											{`${patient.name.first} ${patient.name.last}`}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel id='select-exam'>
									Select Exam
								</InputLabel>
								<Select
									name='exam'
									labelId='select-exam'
									fullWidth
									variant='filled'
									label='Exam Type'
									value={examType}
									onChange={(e) =>
										setExamType(e.target.value)
									}>
									<MenuItem value='Vision Exam'>
										Vision Exam
									</MenuItem>
									<MenuItem value='Medical Exal'>
										Medical Exam
									</MenuItem>
								</Select>
							</FormControl>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateTimePicker
									fullWidth
									ampm={true}
									label='Select Date'
									name='Exam Date and Time'
									value={examDate}
									onChange={(e) => setExamDate(e)}
									slotProps={{
										textField: { variant: "outlined" },
									}}
								/>
							</LocalizationProvider>
						</Box>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							sx={{ mt: "16px" }}>
							Submit
						</Button>
					</form>
				</Box>
			</Modal>
		</Fragment>
	);
};

export default AddApp;
