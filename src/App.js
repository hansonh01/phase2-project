import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./assets/theme/theme";
import { Route, Routes } from "react-router-dom";
import AddNewPatient from "./components/patients/AddNewPatient";
import AppointmentPage from "./layouts/AppointmentsPage";
import PatientsPage from "./layouts/PatientsPage";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./layouts/HomePage";

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<main className='content'>
						<NavBar />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route
								path='/patients'
								element={<PatientsPage />}
							/>
							<Route
								path='/patients/new'
								element={<AddNewPatient />}
							/>
							<Route
								path='/appointments'
								element={<AppointmentPage />}
							/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
