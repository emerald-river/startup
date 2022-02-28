import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import PersistentDrawer from "../components/PersistentDrawer";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {lightTheme} from "../style/themes";
import axios from "axios";
import {CONFIG} from "../config";
import ToolManagerCard from "../components/toolManagerCard";
import TerraformManager from "../components/terraformManager";
import Grid from "@mui/material/Grid";

export default function ToolManager() {
	const [repoList, setRepoList] = React.useState([]);
	const [selectedRepo, setSelectedRepo] = React.useState<string>("");
	const [repoPages, setRepoPages] = React.useState<number>(1);
	const [selectedTool, setSelectedTool] = React.useState<string>("none");

	const setSelectedRepoFromDrawer = (repo_full_name: string) => {
		setSelectedRepo(repo_full_name);
		console.dir(repo_full_name);
		axios
			.get(`https://${CONFIG.BACKEND_URL}${CONFIG.SETTINGS_PATH}`, {
				headers: {
					repo: repo_full_name
				}
			})
			.then((response: any) => {
				console.dir(response.data);
			})
			.catch((error: any) => {
				console.error(error);
			});
	};

	const setSelectedToolCardCallback = (tool_name: string) => {
		const callback = () => {
			setSelectedTool(tool_name);
		};
		return callback;
	};

	//this is the same as componentDidMount
	React.useEffect(() => {
		//api call to get repos
		axios
			.get(`https://${CONFIG.BACKEND_URL}${CONFIG.REPO_PATH}`)
			.then((response: any) => {
				setRepoList(response.data.repos);
			})
			.catch((error: any) => {
				/**TODO: Render an error component */
				console.error(error);
			});
		//api call to get number of pages of repos
		axios
			.get(`https://${CONFIG.BACKEND_URL}${CONFIG.REPO_PATH}/repoPages`)
			.then((response: any) => {
				setRepoPages(response.data.lastPageNumber);
			})
			.catch((error: any) => {
				//TODO: Render an error component
				console.error(error);
			});
	}, []);

	return (
		<ThemeProvider theme={lightTheme}>
			<Box style={{display: "flex"}}>
				<PersistentDrawer
					repos={repoList}
					shareRepo={setSelectedRepoFromDrawer}
					repoPages={repoPages}
				/>
				<Box
					style={{
						width: "100%",
						paddingLeft: 30,
						paddingRight: 30
					}}>
					<Grid container direction="column">
						<Navbar />
						{selectedTool == "none" && (
							<Grid
								container
								direction="row"
								sx={{paddingTop: 5}}>
								<ToolManagerCard
									onClick={setSelectedToolCardCallback(
										"terraform"
									)}
								/>
							</Grid>
						)}
						{selectedTool == "terraform" && (
							<TerraformManager
								selectedRepo={selectedRepo}
								backButton={setSelectedToolCardCallback("none")}
							/>
						)}
						<Footer />
					</Grid>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
