import { Stack, Checkbox, Typography } from "@mui/material";

function TasksItems({ label }) {
	return (
		<Stack direction='row' alignItems='center'>
			<Checkbox />
			<Typography variant='h5'>{label}</Typography>
		</Stack>
	);
}

export default TasksItems;
