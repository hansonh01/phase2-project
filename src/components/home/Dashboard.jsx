import { Box, useTheme, styled, Paper } from "@mui/material";
import { tokens } from "../../assets/theme/theme";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#b7b2ad" : "#76797d",
		...theme.typography.body2,
		padding: theme.spacing(2),
		textAlign: "center",
		color: colors.text,
	}));

	return (
		<Box display='grid' gridTemplateColumns='repeat(12,1fr)' gridAutoRows='100px' gap='20px'>
			<Box
				gridColumn='span 3'
				bgcolor={colors.primary}
				display='flex'
				alignItems='center'
				justifyContent='center'>
				<Item />
			</Box>
		</Box>
	);
};

export default Dashboard;
