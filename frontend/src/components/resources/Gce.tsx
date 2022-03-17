import Grid from "@mui/material/Grid";
import React from "react";
import LabelledMultiInput from "../labelledInputs/LabelledMultiSelect";
import LabelledRadioInput from "../labelledInputs/LabelledRadioSelect";
import Resource, {ResourceState} from "./Resource";

interface IProps {
	disk_image?: string;
	machine_type?: string;
}
interface IState extends ResourceState {
	disk_image: string;
	machine_type: string;
}
export default class Gce extends Resource<IProps, IState> {
	static defaultProps = {
		...Resource.defaultProps,

		//Keys of IState, hacky I know
		data: ["disk_image", "machine_type"],

		//Type of resource for labels
		resource: "Compute Engine",

		//For autogenerated random IDs
		randomPrefix: "GCE-",

		//The "type" to send to the backend
		resourceType: "gce"
	};

	constructor(props: IProps) {
		super(props);

		//Lmao this is so bad practice
		this.state = {
			...this.state,
			disk_image: this.props.disk_image ?? "",
			machine_type: this.props.machine_type ?? ""
		};
	}

	render() {
		return (
			<Grid
				sx={{
					padding: "5px",
					...(this.state.valid
						? {}
						: {
								border: "2px solid red",
								borderRadius: "10px"
						  })
				}}>
				<LabelledMultiInput
					text="Instance OS"
					description="Choose the type of OS you want this instance to run"
					options={[
						{
							label: "Ubuntu Server 20.04 LTS 64-bit x86",
							key: "ubuntu-2004-focal-v20220204"
						},
						{label: "CentOS 8", key: "centos-stream-8-v20220128"},
						{
							label: "Fedora 35",
							key: "fedora-coreos-35-20220116-3-0-gcp-x86-64"
						},
						{
							label: "Microsoft Windows Server 2019",
							key: "windows-server-2019-dc-v20220210"
						}
					]}
					onChange={disk_image => this.setState({disk_image})}
				/>

				<LabelledRadioInput
					text="Instance Hardware"
					description={
						<div>
							<p>
								Choose the computing power you want this engine
								to have:
							</p>
							<p>Micro - 1 CPU 614mB RAM</p>
							<p>Small - 1 CPU 3.75gB RAM</p>
							<p>Large - 2 CPU 8GB RAM</p>
							<p>Extra-Large - 4 CPU 16GB RAM</p>
						</div>
					}
					options={[
						{label: "Micro", key: "f1.micro"},
						{label: "Standard", key: "n1-standard-1"},
						{label: "Large", key: "e2-standard-2"},
						{label: "Extra Large", key: "e2-standard-8"}
					]}
					onChange={machine_type => this.setState({machine_type})}
				/>

				{super.render()}
			</Grid>
		);
	}
}
