import React from "react";
import Navbar from "../components/Navbar";
import MainLandingVisual from "../components/mainLandingVisual";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {lightTheme} from "../lightTheme";

interface IProps {}
interface IState {}
export default class Homepage extends React.Component<IProps, IState> {
	render() {
		return (
			<ThemeProvider theme={lightTheme}>
				<Container>
					<Navbar />
					<MainLandingVisual />
					<Footer />
				</Container>
			</ThemeProvider>
		);
	}
}
