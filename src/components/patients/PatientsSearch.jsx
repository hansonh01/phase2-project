import { Box, TextField, Toolbar, Typography, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../assets/theme/theme";

const PatientsSearch = ({ onSearch }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [name, setName] = useState("");

	const handleInputChange = (event) => {
		setName(event.target.value);
		onSearch(event.target.value);
	};

	const linkStyles = {
		textDecoration: "none",
		margin: "0 20px",
		height: "5ch",
		width: "30ch",
		textAlign: "center",
		padding: "10px ",
		color: colors.grey[100],
		backgroundColor: colors.info.main,
		borderRadius: "10px",
		display: "inline-block",
	};

	return (
		<Fragment>
			<Box display='flex' borderRadius='5px' alignItems='center'>
				<Toolbar>
					<Typography
						variant='h4'
						color={colors.grey[100]}
						fontWeight='bold'>
						SEARCH:
					</Typography>
					<TextField
						variant='outlined'
						label='Enter Patient...'
						value={name}
						sx={{
							m: 1,
							width: "50ch",
							outlineColor: colors.info.main,
						}}
						onChange={handleInputChange}
					/>
				</Toolbar>
				<Box ml='auto' display='flex'>
					<Link to='/patients/new' style={linkStyles}>
						<Typography variant='h4' justifyContent='center'>
							ADD NEW PATIENT
						</Typography>
					</Link>
				</Box>
			</Box>
		</Fragment>
	);
};

export default PatientsSearch;
