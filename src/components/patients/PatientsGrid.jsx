import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, useTheme, Modal } from "@mui/material";
import { Male, Female } from "@mui/icons-material";
import { tokens } from "../../assets/theme/theme";
import { Fragment, useState } from "react";
import EditPatients from "./EditPatients";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditIcon from "@mui/icons-material/Edit";

const PatientsGrid = ({ patients, onDelete, onUpdate }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [selectedPatient, setSelectedPatient] = useState("");

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const rowsWithIds = patients.map((patient, index) => ({
		...patient,
		id: index,
	}));

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const handleEditing = (patient) => {
		setSelectedPatient(patient);
		handleOpen();
	};

	const columns = [
		{ field: "id", headerName: "ID", flex: 0.25 },
		{
			field: "picture",
			headerName: "Profile",
			flex: 1,
			renderCell: (params) => (
				<img
					src={params.row.picture.thumbnail}
					alt='Thumbnail'
					style={{ width: 50, height: 50 }}
				/>
			),
		},
		{
			field: "gender",
			headerName: "Gender",
			flex: 1,
			renderCell: ({ row: { gender } }) => {
				return (
					<Box
						display='flex'
						justifyContent='center'
						backgroundColor='transparent'>
						{gender === "male" && <Male />}
						{gender === "female" && <Female />}
					</Box>
				);
			},
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column-cell",
			valueGetter: (params) =>
				`${params.row.name.first} ${params.row.name.last}`,
		},
		{
			field: "dob",
			headerName: "Age",
			type: "number",
			flex: 1,
			headerAlign: "left",
			align: "left",
			valueGetter: (params) => `${params.row.dob.age}`,
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "edit",
			headerName: "Edit",
			flex: 0.5,
			renderCell: (params) => (
				<IconButton onClick={() => handleEditing(params.row)}>
					<EditIcon />
				</IconButton>
			),
		},
		{
			field: "delete",
			headerName: "Delete",
			flex: 0.5,
			renderCell: (params) => (
				<IconButton onClick={() => onDelete(params.row.id)}>
					<PersonRemoveIcon />
				</IconButton>
			),
		},
	];
	return (
		<Fragment>
			<Box m='20px' mb={"100px"}>
				<Box
					m='40px 0 0 0'
					height='75vh'
					width='100%'
					sx={{
						"& .MuiDataGrid-root": {
							border: "none",
						},
						"& .MuiDataGrid-cell": {
							borderBottom: "none",
						},
						"& .name-column--cell": {
							color: colors.grey[300],
						},
						"& .MuiDataGrid-columnHeaders": {
							backgroundImage: colors.gradients.info.main,
							borderBottom: "none",
						},
						"& .MuiDataGrid-virtualScroller": {
							backgroundColor: colors.primary[400],
						},
						"& .MuiDataGrid-footerContainer": {
							borderTop: "none",
							backgroundImage: colors.gradients.info.main,
						},
						"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
							color: `${colors.grey[100]} !important`,
						},
					}}>
					<DataGrid
						sx={{ paddingBottom: "20px" }}
						rows={rowsWithIds}
						columns={columns}
						slots={{ tool: GridToolbar }}
						initialState={{
							pagination: {
								pageSize: 8,
							},
						}}
					/>
				</Box>
				<Modal open={open}>
					<Box sx={style}>
						<EditPatients
							patient={selectedPatient}
							onUpdate={onUpdate}
							onClose={handleClose}
						/>
					</Box>
				</Modal>
			</Box>
		</Fragment>
	);
};

export default PatientsGrid;
