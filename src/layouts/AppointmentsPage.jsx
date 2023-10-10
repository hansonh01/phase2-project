import { Fragment } from "react";
import { Box } from "@mui/material";
import Headers from "../components/headers/Headers";
import AppCalendar from "../components/appointments/AppCalendar";

const AppointmentsPage = ({ patients }) => {
	return (
		<Fragment>
			<Box m='20px'>
				<Headers title='APPOINTMENTS' />
			</Box>
			<AppCalendar patients={patients} />
		</Fragment>
	);
};

export default AppointmentsPage;
