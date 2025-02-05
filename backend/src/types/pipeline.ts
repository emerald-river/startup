import {providerName} from "./terraform";

export interface Job {
	type: "terraform";
}
export interface TerraformJob extends Job {
	type: "terraform";
	provider: providerName;
	project?: string;
}
export const jobIsTerraform = (job: Job): job is TerraformJob =>
	job.type === "terraform";
