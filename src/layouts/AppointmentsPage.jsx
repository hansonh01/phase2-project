import { Fragment } from "react";
import { Box } from "@mui/material";
import Headers from "../components/headers/Headers";
import AppCalendar from "../components/appointments/AppCalendar";

const AppointmentsPage = ({ patients, onAddApp }) => {
	return (
		<Fragment>
			<Box m='20px'>
				<Headers title='APPOINTMENTS' />
			</Box>
			<AppCalendar patients={patients} onAddApp={onAddApp} />
		</Fragment>
	);
};

export default AppointmentsPage;
