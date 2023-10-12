import { Card, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";
import TasksItems from "./TasksItems";

const Tasks = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Card
			elevation={4}
			component={Stack}
			sx={{
				px: 3,
				py: 5,
				borderRadius: 2,
				backgroundImage:
					theme.palette.mode === "dark"
						? colors.gradients.secondary.state
						: colors.gradients.info.main,
			}}>
			<Stack sx={{ width: "100%", height: "50vh" }} spacing={2}>
				<Typography variant='h3'>Work-Up Procedure: </Typography>
				<TasksItems label='Obtain Medical History' />
				<TasksItems label='Fill out Chief Complaint' />
				<TasksItems label='Obtain Visual Acuity, Auto-Refraction' />
				<TasksItems label='Blood Pressure, Eye Pressure' />
				<TasksItems label='Pupil Sizes' />
				<TasksItems label='Retinal Scan / Dilations' />
			</Stack>
		</Card>
	);
};

export default Tasks;
