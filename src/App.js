import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./assets/theme/theme";
import { Route, Routes } from "react-router-dom";
import usePatients from "./components/data/usePatients";
import AddNewPatient from "./components/patients/AddNewPatient";
import PatientsPage from "./layouts/PatientsPage";
import AppointmentsPage from "./layouts/AppointmentsPage";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./layouts/HomePage";

function App() {
	const [theme, colorMode] = useMode();
	const {
		patients,
		handleGenerated,
		handleDelete,
		handleUpdate,
		handleAdd,
		handleAddAppointment,
	} = usePatients();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<main className='content'>
						<NavBar />
						<Routes>
							<Route
								path='/'
								element={
									<HomePage onGenerated={handleGenerated} />
								}
							/>
							<Route
								path='/patients'
								element={
									<PatientsPage
										patients={patients}
										onDelete={handleDelete}
										onUpdate={handleUpdate}
									/>
								}
							/>
							<Route
								path='/patients/new'
								element={<AddNewPatient onAdd={handleAdd} />}
							/>
							<Route
								path='/appointments'
								element={
									<AppointmentsPage
										patients={patients}
										onAddApp={handleAddAppointment}
									/>
								}
							/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
