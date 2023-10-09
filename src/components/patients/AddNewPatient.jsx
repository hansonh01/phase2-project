import {
	useTheme,
	Box,
	TextField,
	Select,
	MenuItem,
	Button,
	Grid,
} from "@mui/material";
import { formatDate, calculateAge } from "../data/format";
import { Fragment, useState } from "react";
import { tokens } from "../../assets/theme/theme";
import usePatients from "../data/usePatients";
import Headers from "../headers/Headers";

const AddNewPatient = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { handleAddNewPatient } = usePatients();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthday, setBirthday] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newPatient = {
			name: {
				first: firstName,
				last: lastName,
			},
			dob: {
				date: formatDate(birthday),
				age: calculateAge(birthday),
			},
			phone: phoneNumber,
			email: email,
			gender: gender,
		};

		handleAddNewPatient(newPatient);
	};

	return (
		<Fragment>
			<Box m='20px'>
				<Headers
					title='NEW PATIENT FORM'
					subtitle='Please fill out the following'
				/>
				<form noValidate autoComplete='off' onSubmit={handleSubmit}>
					<Grid container spacing={3} p={2}>
						<Grid item xs={12} sm={6} mt={5}>
							<TextField
								autoComplete='off'
								name='first'
								fullWidth
								variant='filled'
								type='text'
								label='First Name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6} mt={5}>
							<TextField
								autoComplete='off'
								name='last'
								fullWidth
								variant='filled'
								type='text'
								label='Last Name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='off'
								name='date'
								fullWidth
								variant='filled'
								type='date'
								label='Birthday'
								value={birthday}
								onChange={(e) => setBirthday(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='off'
								name='phone'
								fullWidth
								variant='filled'
								type='string'
								label='Phone Number'
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='off'
								name='email'
								fullWidth
								variant='filled'
								type='email'
								label='Email Address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Select
								name='gender'
								fullWidth
								variant='filled'
								label='Gender'
								value={gender}
								onChange={(e) => setGender(e.target.value)}>
								<MenuItem value='male'>Male</MenuItem>
								<MenuItem value='female'>Female</MenuItem>
							</Select>
						</Grid>
					</Grid>
					<Button
						type='submit'
						variant='contained'
						sx={{ marginTop: "16px", bgcolor: colors.info.focus }}>
						Submit
					</Button>
				</form>
			</Box>
		</Fragment>
	);
};

export default AddNewPatient;
