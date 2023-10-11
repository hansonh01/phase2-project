import { Stack, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../assets/theme/theme";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Links = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	const linkStyles = {
		textDecoration: "none",
		margin: "0 6px",
		color: colors.grey[100],
	};

	return (
		<Stack
			direction='row'
			alignItems='center'
			sx={{
				marginLeft: "auto",
				"& :hover": {
					color: "#868dfb !important",
				},
				"& .:active": { color: "#6870fa !important" },
			}}>
			<IconButton onClick={colorMode.toggleColorMode}>
				{theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
			</IconButton>
			<NavLink to='/' style={linkStyles}>
				<Typography variant='h4'>HOME</Typography>
			</NavLink>
			<NavLink to='/patients' style={linkStyles}>
				<Typography variant='h4'>PATIENTS</Typography>
			</NavLink>
			<NavLink to='/appointments' style={linkStyles}>
				<Typography variant='h4'>APPOINTMENTS</Typography>
			</NavLink>
		</Stack>
	);
};

export default Links;
