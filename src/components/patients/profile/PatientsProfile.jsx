import { Box, Container, Grid, Stack, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { tokens } from "../../../assets/theme/theme";
import Headers from "../../headers/Headers";
import PatientsCard from "./PatientsCard";
import PatientsInfo from "./PatientsInfo";

const PatientsProfile = ({ patients }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { id } = useParams();
	const selectedPatient = patients.find((patient) => patient.id.toString() === id);

	return (
		<Fragment>
			<Box component='main' sx={{ flexGrow: 1, py: 8 }}>
				<Container maxWidth='lg'>
					<Stack spacing={3}>
						<Headers title={"PROFILE"} />
						<Grid container spacing={3}>
							<Grid item xs={12} md={6} lg={4}>
								<PatientsCard
									patient={selectedPatient}
									background={colors.background.card}
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={8}>
								<PatientsInfo
									patient={selectedPatient}
									background={colors.background.card}
								/>
							</Grid>
						</Grid>
					</Stack>
				</Container>
			</Box>
		</Fragment>
	);
};
export default PatientsProfile;
