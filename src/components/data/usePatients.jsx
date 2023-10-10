import { useState, useEffect } from "react";
import {
	getPatients,
	generatePatient,
	storePatient,
	deletePatients,
	updatePatients,
	addPatient,
} from "./APIhandler";
import { formatDate, formatEnglishNameOnly, formatPhoneNumber } from "./format";

const usePatients = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		getPatients().then((data) => setPatients(data));
	}, []);

	const handleDelete = async (id) => {
		await deletePatients(id).then(() => {
			const deletion = patients.filter((patient) => patient.id !== id);
			setPatients(deletion);
		});
	};

	const handleUpdate = async (id, updatedInfo) => {
		const results = await updatePatients(id, updatedInfo);
		const updates = patients.map((patient) => {
			if (patient.id === id) {
				return { ...patient, ...results.data };
			} else {
				return patient;
			}
		});
		setPatients(updates);
	};

	const handleAdd = async (newPatient) => {
		const addedPatient = await addPatient(newPatient);
		setPatients([...patients, addedPatient]);
	};

	const handleGenerated = async () => {
		try {
			const results = await generatePatient();
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
					date: "",
				},
			};
			await storePatient(newPatient);
			setPatients([...patients, newPatient]);
		} catch (error) {
			throw error;
		}
	};

	return {
		patients,
		handleGenerated,
		handleDelete,
		handleUpdate,
		handleAdd,
	};
};
export default usePatients;
