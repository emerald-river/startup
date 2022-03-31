import Resource, {ResourceState} from "./Resource";

interface IProps {}
interface IState extends ResourceState {}
export default class S3 extends Resource<IProps, IState> {
	static defaultProps = {
		...Resource.defaultProps,

		//Type of resource for labels
		resource: "Cloud Storage",

		//For autogenerated random IDs
		randomPrefix: "bucket-",

		//Length of random hash
		randomGroups: 5,

		//The "type" to send to the backend
		resourceType: "s3"
	};

	render() {
		return super.render();
	}
}
