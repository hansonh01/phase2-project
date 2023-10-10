import { Box } from "@mui/material";
import { Fragment, useState } from "react";
import Headers from "../components/headers/Headers";
import PatientsGrid from "../components/patients/PatientsGrid";
import PatientsSearch from "../components/patients/PatientsSearch";

const PatientsPage = ({ patients, onDelete, onUpdate }) => {
	const [searchText, setSearchText] = useState("");
	const filterPatients = patients.filter((patient) => {
		const fullName = `${patient.name.first} ${patient.name.last}`;
		return fullName.toLowerCase().includes(searchText.toLowerCase());
	});

	return (
		<Fragment>
			<Box m='20px'>
				<Headers title='PATIENTS' subtitle='records' />
			</Box>
			<PatientsSearch onSearch={setSearchText} />
			<PatientsGrid
				patients={filterPatients}
				onDelete={onDelete}
				onUpdate={onUpdate}
			/>
		</Fragment>
	);
};

export default PatientsPage;
