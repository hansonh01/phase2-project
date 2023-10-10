import axios from "axios";

const patientsApi = axios.create({
	baseURL: "http://localhost:3001",
});

export const getPatients = async () => {
	const response = await patientsApi.get("/patients");
	return response.data;
};

export const addPatient = async (newPatient) => {
	return await patientsApi.post("/patients", newPatient);
};

export const updatePatients = async (id, updatedInfo) => {
	return await patientsApi.patch(`/patients/${id}`, updatedInfo);
};

export const deletePatients = async ({ id }) => {
	return await patientsApi.delete(`/patients/${id}`, id);
};

export const generatePatient = async () => {
	try {
		const response = await axios.get("https://randomuser.me/api/", {});
		return response.data.results[0];
	} catch (error) {
		throw error;
	}
};

export const storePatient = async (newPatient) => {
	try {
		const response = await patientsApi.post("/patients", newPatient);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export default patientsApi;
