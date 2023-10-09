import { useState, useEffect } from "react";
import {
	fetchDataBase,
	generateRandomPatient,
	saveRandomPatient,
	deleteSeletectedPatient,
	editSelectedPatient,
	addNewPatient,
} from "./APIhandler";
import { formatDate, formatEnglishNameOnly, formatPhoneNumber } from "./format";

const usePatients = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		fetchDataBase()
			.then((data) => setPatients(data))
			.catch((error) => {
				throw error;
			});
	}, []);

	const handleGeneratedPatient = async () => {
		try {
			const results = await generateRandomPatient();
			const date = formatDate(results.dob.date);
			const phone = formatPhoneNumber(results.phone);
			const first = formatEnglishNameOnly(results.name.first);
			const last = formatEnglishNameOnly(results.name.last);
			const newPatient = {
				name: {
					first: first,
					last: last,
				},
				dob: {
					date: date,
					age: results.dob.age,
				},
				phone: phone,
				email: results.email,
				gender: results.gender,
				picture: results.picture,
				appointments: {
					title: "",
					exam: "",
					dateOfExam: "",
				},
			};
			await saveRandomPatient(newPatient);
			setPatients([...patients, newPatient]);
		} catch (error) {
			throw error;
		}
	};

	const handleDeletePatients = (id) => {
		try {
			const results = deleteSeletectedPatient(id);
			const updatePatientsList = patients.filter(
				(patient) => patient.id !== results.id
			);
			setPatients(updatePatientsList);
		} catch (error) {
			throw error;
		}
	};

	const handleEditPatient = (id, updatedInfo) => {
		try {
			editSelectedPatient(id, updatedInfo).then(() => {
				const updateList = patients.map((patient) => {
					if (patient.id === id) {
						return { ...patient, ...updatedInfo };
					} else {
						return patient;
					}
				});
				setPatients(updateList);
			});
		} catch (error) {
			throw error;
		}
	};

	const handleAddNewPatient = (newPatient) => {
		try {
			addNewPatient(newPatient).then(() => {
				setPatients([...patients, newPatient]);
			});
		} catch (error) {
			throw error;
		}
	};

	return {
		patients,
		handleGeneratedPatient,
		handleDeletePatients,
		handleEditPatient,
		handleAddNewPatient,
	};
};
export default usePatients;
