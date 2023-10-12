import { Box, Container, Grid, useTheme } from "@mui/material";
import { Fragment } from "react";
import { tokens } from "../../assets/theme/theme";
import MiniWidget from "./MiniWidget";
import MessageBoard from "./MessageBoard";
import Tasks from "./tasks/Tasks";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GlassesIcon from "../../assets/images/glasses-svgrepo-com.svg";
import PreviewIcon from "@mui/icons-material/Preview";

const Layout = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Fragment>
			<Box component='main' sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }} mx='20px'>
				<Container maxWidth='xl'>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={3} mb={1}>
							<MiniWidget
								title='Weekly Sales'
								value='$22.3 k'
								icon={
									<TrendingUpIcon
										sx={{
											width: "50px",
											height: "auto",
											color: colors.success.main,
										}}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<MiniWidget
								title='New Patients'
								value='582'
								icon={
									<PersonAddAlt1Icon
										color='inherit'
										sx={{ width: "50px", height: "auto" }}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<MiniWidget
								title='Frames Sold!'
								value='1.23 k'
								icon={
									<img
										src={GlassesIcon}
										alt='Glasses'
										style={{ width: "50px", height: "auto" }}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<MiniWidget
								title='Optos Scans!'
								value='324'
								icon={
									<PreviewIcon
										sx={{
											width: "50px",
											height: "auto",
											color: colors.primary.main,
										}}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={8} lg={8}>
							<MessageBoard />
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<Tasks />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Fragment>
	);
};

export default Layout;
