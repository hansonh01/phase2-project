import { Fragment, useState } from "react";
import { Box, TextField, Select, Button, MenuItem } from "@mui/material";
import { formatDate, calculateAge } from "../data/format";

const EditPatients = ({ patient, onEdit, onClose }) => {
	const [firstName, setFirstName] = useState(patient.name.first);
	const [lastName, setLastName] = useState(patient.name.last);
	const [birthday, setBirthday] = useState(patient.dob.date);
	const [phoneNumber, setPhoneNumber] = useState(patient.phone);
	const [email, setEmail] = useState(patient.email);
	const [gender, setGender] = useState(patient.gender);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const updatedInfo = {
			id: patient.id,
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
		onEdit(patient.id, updatedInfo);
		onClose();
	};

	return (
		<Fragment>
			<form onSubmit={handleOnSubmit} noValidate autoComplete='off'>
				<Box display='grid' gap='40px'>
					<TextField
						name='first'
						fullWidth
						variant='filled'
						type='text'
						label='First Name'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<TextField
						name='last'
						fullWidth
						variant='filled'
						type='text'
						label='Last Name'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<TextField
						name='date'
						fullWidth
						variant='filled'
						type='date'
						label='Birthday'
						value={birthday}
						onChange={(e) => setBirthday(e.target.value)}
					/>
					<TextField
						name='phone'
						fullWidth
						variant='filled'
						type='string'
						label='Phone Number'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<TextField
						name='email'
						fullWidth
						variant='filled'
						type='email'
						label='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
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
				</Box>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					sx={{ marginTop: "16px" }}>
					Submit
				</Button>
			</form>
		</Fragment>
	);
};

export default EditPatients;
