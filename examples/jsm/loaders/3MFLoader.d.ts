import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Group } from "../../../src/objects/Group";

export class ThreeMFLoader extends Loader {

	constructor( manager?: LoadingManager );
	availableExtensions: object[];

	load(url: string, onLoad: (object: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse( data: ArrayBuffer ): Group;
	addExtension( extension: object ):void

}
