import { useTheme, Box, AppBar, Toolbar, Icon, Typography, styled } from "@mui/material";
import { Fragment } from "react";
import { tokens } from "../../assets/theme/theme";
import Links from "./Links";

import VisibilityIcon from "@mui/icons-material/Visibility";

const NavBar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const StyledToolbar = styled(Toolbar)(({ theme }) => ({
		backgroundImage:
			theme.palette.mode === "dark"
				? colors.gradients.secondary.state
				: colors.gradients.info.main,
	}));

	return (
		<Fragment>
			<Box sx={{ flexGrow: 1 }} p={2} justifyContent='space-between'>
				<AppBar position='static'>
					<StyledToolbar>
						<Icon>
							<VisibilityIcon />
						</Icon>
						<Typography variant='h1' color={colors.grey[100]} fontWeight='bold'>
							EHR
						</Typography>
						<Links />
					</StyledToolbar>
				</AppBar>
			</Box>
		</Fragment>
	);
};

export default NavBar;
