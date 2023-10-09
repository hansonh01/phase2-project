import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
	...(mode === "dark"
		? {
				background: {
					default: "#1a2035",
					sidenav: "#1f283e",
					card: "#202940",
				},

				text: {
					main: "#ffffff",
					focus: "#ffffff",
				},

				transparent: {
					main: "transparent",
				},

				white: {
					main: "#ffffff",
					focus: "#ffffff",
				},

				black: {
					light: "#000000",
					main: "#000000",
					focus: "#000000",
				},

				primary: {
					main: "#e91e63",
					focus: "#e91e63",
				},

				secondary: {
					main: "#7b809a",
					focus: "#8f93a9",
				},

				info: {
					main: "#1A73E8",
					focus: "#1662C4",
				},

				success: {
					main: "#4CAF50",
					focus: "#67bb6a",
				},

				warning: {
					main: "#fb8c00",
					focus: "#fc9d26",
				},

				error: {
					main: "#F44335",
					focus: "#f65f53",
				},

				light: {
					main: "#f0f2f566",
					focus: "#f0f2f566",
				},

				dark: {
					main: "#344767",
					focus: "#2c3c58",
				},

				grey: {
					100: "#f8f9fa",
					200: "#f0f2f5",
					300: "#dee2e6",
					400: "#ced4da",
					500: "#adb5bd",
					600: "#6c757d",
					700: "#495057",
					800: "#343a40",
					900: "#212529",
				},

				gradients: {
					primary: {
						main: "linear-gradient(195deg, #EC407A, #D81B60)",
						state: "linear-gradient(195deg, #D81B60, #AA1346)",
					},
					secondary: {
						main: "linear-gradient(195deg, #747b8a, #495361)",
						state: "linear-gradient(195deg, #495361, #2b313b)",
					},
					info: {
						main: "linear-gradient(195deg, #49a3f1, #1A73E8)",
						state: "linear-gradient(195deg, #1A73E8, #0b4cbe)",
					},
					success: {
						main: "linear-gradient(195deg, #66BB6A, #43A047)",
						state: "linear-gradient(195deg, #43A047, #298537)",
					},
					warning: {
						main: "linear-gradient(195deg, #FFA726, #FB8C00)",
						state: "linear-gradient(195deg, #FB8C00, #e07b00)",
					},
					error: {
						main: "linear-gradient(195deg, #EF5350, #E53935)",
						state: "linear-gradient(195deg, #E53935, #c93220)",
					},
					light: {
						main: "linear-gradient(195deg, #EBEFF4, #CED4DA)",
						state: "linear-gradient(195deg, #CED4DA, #b9c1c7)",
					},
					dark: {
						main: "linear-gradient(195deg, #42424a, #191919)",
						state: "linear-gradient(195deg, #191919, #000000)",
					},
				},

				socialMediaColors: {
					facebook: {
						main: "#3b5998",
						dark: "#344e86",
					},

					twitter: {
						main: "#55acee",
						dark: "#3ea1ec",
					},

					instagram: {
						main: "#125688",
						dark: "#0e456d",
					},

					linkedin: {
						main: "#0077b5",
						dark: "#00669c",
					},

					pinterest: {
						main: "#cc2127",
						dark: "#b21d22",
					},

					youtube: {
						main: "#e52d27",
						dark: "#d41f1a",
					},

					vimeo: {
						main: "#1ab7ea",
						dark: "#13a3d2",
					},

					slack: {
						main: "#3aaf85",
						dark: "#329874",
					},

					dribbble: {
						main: "#ea4c89",
						dark: "#e73177",
					},

					github: {
						main: "#24292e",
						dark: "#171a1d",
					},

					reddit: {
						main: "#ff4500",
						dark: "#e03d00",
					},

					tumblr: {
						main: "#35465c",
						dark: "#2a3749",
					},
				},

				badgeColors: {
					primary: {
						background: "#f8b3ca",
						text: "#cc084b",
					},

					secondary: {
						background: "#d7d9e1",
						text: "#6c757d",
					},

					info: {
						background: "#aecef7",
						text: "#095bc6",
					},

					success: {
						background: "#bce2be",
						text: "#339537",
					},

					warning: {
						background: "#ffd59f",
						text: "#c87000",
					},

					error: {
						background: "#fcd3d0",
						text: "#f61200",
					},

					light: {
						background: "#ffffff",
						text: "#c7d3de",
					},

					dark: {
						background: "#8097bf",
						text: "#1e2e4a",
					},
				},

				coloredShadows: {
					primary: "#e91e62",
					secondary: "#110e0e",
					info: "#00bbd4",
					success: "#4caf4f",
					warning: "#ff9900",
					error: "#f44336",
					light: "#adb5bd",
					dark: "#404040",
				},

				inputBorderColor: "#d2d6da",

				tabs: {
					indicator: { boxShadow: "#ddd" },
				},
		  }
		: {
				background: {
					default: "#f0f2f5",
				},

				text: {
					main: "#7b809a",
					focus: "#7b809a",
				},

				transparent: {
					main: "transparent",
				},

				white: {
					main: "#ffffff",
					focus: "#ffffff",
				},

				black: {
					light: "#000000",
					main: "#000000",
					focus: "#000000",
				},

				primary: {
					main: "#e91e63",
					focus: "#e91e63",
				},

				secondary: {
					main: "#7b809a",
					focus: "#8f93a9",
				},

				info: {
					main: "#1A73E8",
					focus: "#1662C4",
				},

				success: {
					main: "#4CAF50",
					focus: "#67bb6a",
				},

				warning: {
					main: "#fb8c00",
					focus: "#fc9d26",
				},

				error: {
					main: "#F44335",
					focus: "#f65f53",
				},

				light: {
					main: "#f0f2f5",
					focus: "#f0f2f5",
				},

				dark: {
					main: "#344767",
					focus: "#2c3c58",
				},

				grey: {
					100: "#141414",
					200: "#292929",
					300: "#3d3d3d",
					400: "#525252",
					500: "#666666",
					600: "#858585",
					700: "#a3a3a3",
					800: "#c2c2c2",
					900: "#e0e0e0",
				},

				gradients: {
					primary: {
						main: "linear-gradient(195deg, #EC407A, #D81B60)",
						state: "linear-gradient(195deg, #D81B60, #AA1346)",
					},
					secondary: {
						main: "linear-gradient(195deg, #747b8a, #495361)",
						state: "linear-gradient(195deg, #495361, #2b313b)",
					},
					info: {
						main: "linear-gradient(195deg, #49a3f1, #1A73E8)",
						state: "linear-gradient(195deg, #1A73E8, #0b4cbe)",
					},
					success: {
						main: "linear-gradient(195deg, #66BB6A, #43A047)",
						state: "linear-gradient(195deg, #43A047, #298537)",
					},
					warning: {
						main: "linear-gradient(195deg, #FFA726, #FB8C00)",
						state: "linear-gradient(195deg, #FB8C00, #e07b00)",
					},
					error: {
						main: "linear-gradient(195deg, #EF5350, #E53935)",
						state: "linear-gradient(195deg, #E53935, #c93220)",
					},
					light: {
						main: "linear-gradient(195deg, #EBEFF4, #CED4DA)",
						state: "linear-gradient(195deg, #CED4DA, #b9c1c7)",
					},
					dark: {
						main: "linear-gradient(195deg, #42424a, #191919)",
						state: "linear-gradient(195deg, #191919, #000000)",
					},
				},

				socialMediaColors: {
					facebook: {
						main: "#3b5998",
						dark: "#344e86",
					},

					twitter: {
						main: "#55acee",
						dark: "#3ea1ec",
					},

					instagram: {
						main: "#125688",
						dark: "#0e456d",
					},

					linkedin: {
						main: "#0077b5",
						dark: "#00669c",
					},

					pinterest: {
						main: "#cc2127",
						dark: "#b21d22",
					},

					youtube: {
						main: "#e52d27",
						dark: "#d41f1a",
					},

					vimeo: {
						main: "#1ab7ea",
						dark: "#13a3d2",
					},

					slack: {
						main: "#3aaf85",
						dark: "#329874",
					},

					dribbble: {
						main: "#ea4c89",
						dark: "#e73177",
					},

					github: {
						main: "#24292e",
						dark: "#171a1d",
					},

					reddit: {
						main: "#ff4500",
						dark: "#e03d00",
					},

					tumblr: {
						main: "#35465c",
						dark: "#2a3749",
					},
				},

				badgeColors: {
					primary: {
						background: "#f8b3ca",
						text: "#cc084b",
					},

					secondary: {
						background: "#d7d9e1",
						text: "#6c757d",
					},

					info: {
						background: "#aecef7",
						text: "#095bc6",
					},

					success: {
						background: "#bce2be",
						text: "#339537",
					},

					warning: {
						background: "#ffd59f",
						text: "#c87000",
					},

					error: {
						background: "#fcd3d0",
						text: "#f61200",
					},

					light: {
						background: "#ffffff",
						text: "#c7d3de",
					},

					dark: {
						background: "#8097bf",
						text: "#1e2e4a",
					},
				},

				coloredShadows: {
					primary: "#e91e62",
					secondary: "#110e0e",
					info: "#00bbd4",
					success: "#4caf4f",
					warning: "#ff9900",
					error: "#f44336",
					light: "#adb5bd",
					dark: "#404040",
				},

				inputBorderColor: "#d2d6da",

				tabs: {
					indicator: { boxShadow: "#ddd" },
				},
		  }),
});

export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						primary: {
							main: colors.primary.main,
						},
						secondary: {
							main: colors.secondary.main,
						},
						neutral: {
							dark: colors.grey[700],
							main: colors.grey[500],
							light: colors.grey[100],
						},
						background: {
							default: colors.background.default,
						},
				  }
				: {
						primary: {
							main: colors.primary.main,
						},
						secondary: {
							main: colors.secondary.main,
						},
						neutral: {
							dark: colors.grey[700],
							main: colors.grey[500],
							light: colors.grey[100],
						},
						background: {
							default: colors.background.default,
						},
				  }),
		},
		typography: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Rubik", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Rubik", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Rubik", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Rubik", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Rubik", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Rubik", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("dark");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
