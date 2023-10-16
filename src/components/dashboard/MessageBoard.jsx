import { Stack, Box, Alert, Card, useTheme, Typography } from "@mui/material";
import { tokens } from "../../assets/theme/theme";

const MessageBoard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Card
			elevation={4}
			component={Stack}
			direction='row'
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
				<Typography fontWeight='bold' variant='h3'>
					Message Board !
				</Typography>
				<Alert
					severity='info'
					sx={{
						bgcolor: colors.badgeColors.info.text,
						color: colors.text.main,
					}}>
					<Typography variant='h7'>
						P2-EHR Practice Management 1.01 Unreleased 2023
					</Typography>
				</Alert>
				<Alert
					severity='warning'
					sx={{
						bgcolor: colors.badgeColors.warning.text,
						color: colors.text.main,
					}}>
					<Typography variant='h7'>
						[Its Vision Monday and 20/20 Magazine are hosting the 15th annual EyeVote
						Readers' Choice Awards to identify the optical industry's favorite products
						and companies this year. Don't forget to cast your vote for Eyefinity before
						nominations end on October 25, 2023.]-Example Message
					</Typography>
				</Alert>
				<Alert
					severity='error'
					sx={{
						bgcolor: colors.socialMediaColors.pinterest.main,
						color: colors.text.main,
					}}>
					<Typography variant='h7'>
						This Electronic Health Records (EHR) program is designed exclusively for
						educational purposes and is not intended for real-world, clinical, or
						medical practice use. The information, patient data, and functionalities
						provided within this system are purely fictional and are not to be relied
						upon for any medical, diagnostic, or treatment decisions.
					</Typography>
				</Alert>

				<Alert
					severity='success'
					sx={{
						bgcolor: colors.badgeColors.success.text,
						color: colors.text.main,
					}}>
					<Typography variant='h7'>THANK YOU FOR VISITING!</Typography>
				</Alert>
			</Stack>
		</Card>
	);
};

export default MessageBoard;
