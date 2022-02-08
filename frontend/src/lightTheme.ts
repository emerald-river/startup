import {createTheme} from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		palette: {
			mode: string;
			primary: {
				main: string;
			};
			secondary: {
				main: string;
			};
		};
	}
}

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#679062"
		},
		secondary: {
			main: "#85cb6b"
		}
	}
});
