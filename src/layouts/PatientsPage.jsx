import { Box } from "@mui/material";
import { Fragment, useState } from "react";
import usePatients from "../components/data/usePatients";
import Headers from "../components/headers/Headers";
import PatientsGrid from "../components/patients/PatientsGrid";
import PatientsSearch from "../components/patients/PatientsSearch";

const PatientsPage = () => {
	const { patients } = usePatients();
	const [searchText, setSearchText] = useState("");
	const filterPatients = [...patients].filter((patient) => {
		const fullName = `${patient.name.first} ${patient.name.last}`;
		return fullName.toLowerCase().includes(searchText.toLowerCase());
	});

	return (
		<Fragment>
			<Box m='20px'>
				<Headers title='PATIENTS' subtitle='records' />
			</Box>
			<PatientsSearch onSearch={setSearchText} />
			<PatientsGrid patients={filterPatients} />
		</Fragment>
	);
};

export default PatientsPage;
