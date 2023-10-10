import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from "@mui/material";

import { tokens } from "../../assets/theme/theme";
import { Fragment } from "react";

const AppCalendar = ({ patients }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const haveAppointments = patients.filter(
		(patient) => patient.appointments.exam !== ""
	);

	const showAppointments = haveAppointments.map(
		(patient) => patient.appointments
	);

	const formatAppointment = showAppointments.map((event) => ({
		title: event.title,
		start: event.date,
	}));

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete this appointment '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};
	return (
		<Fragment>
			<Box display='flex' justifyContent='space-between' m='20px'>
				<Box
					flex='1 1 20%'
					bgcolor={colors.primary}
					p='15px'
					m='10px'
					borderRadius='4px'
					sx={{ backgroundImage: colors.gradients.secondary.state }}>
					<List>
						{showAppointments.map((event, index) => (
							<ListItem
								key={index}
								sx={{
									backgroundColor: colors.info.main,
									margin: "15px 0",
									borderRadius: "2px",
								}}>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.date, {
												year: "numeric",
												month: "short",
												day: "numeric",
												hour: "2-digit",
												minute: "2-digit",
												hour12: "true",
												meridiem: "short",
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>
				<Box flex='1 1 100%' ml='15px' mb='15px'>
					<FullCalendar
						height='75vh'
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: "prev,next today",
							center: "title",
							right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
						}}
						initialView='dayGridMonth'
						editable={true}
						selectable={true}
						selectMirror={true}
						eventClick={handleEventClick}
						events={formatAppointment}
					/>
				</Box>
			</Box>
		</Fragment>
	);
};

export default AppCalendar;
