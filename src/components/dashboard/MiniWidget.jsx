import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../assets/theme/theme";

const MiniWidget = ({ title, value, icon }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Card
			elevation={4}
			component={Stack}
			spacing={3}
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
			<Box sx={{ width: 64, height: 64 }}>{icon}</Box>
			<Stack spacing={0.5}>
				<Typography variant='h2'>{value}</Typography>
				<Typography variant='h5'>
					<strong>{title}</strong>
				</Typography>
			</Stack>
		</Card>
	);
};

export default MiniWidget;
