import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
});

export const fetchDataBase = async () => {
	try {
		const response = await api.get("/patients");
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const generateRandomPatient = async () => {
	try {
		const response = await axios.get("https://randomuser.me/api/", {});
		return response.data.results[0];
	} catch (error) {
		throw error;
	}
};

export const saveRandomPatient = async (newPatient) => {
	try {
		const response = await api.post("/patients", newPatient);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteSeletectedPatient = async (id) => {
	try {
		const response = await api.delete(`/patients/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const editSelectedPatient = async (id, updatedInfo) => {
	try {
		const response = await api.patch(`/patients/${id}`, updatedInfo);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const addNewPatient = async (newPatient) => {
	try {
		const response = await api.post("/patients", newPatient);
		return response.data;
	} catch (error) {
		throw error;
	}
};
