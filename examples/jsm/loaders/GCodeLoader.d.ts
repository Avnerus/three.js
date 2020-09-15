import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Group } from "../../../src/objects/Group";

export class GCodeLoader extends Loader {

	constructor( manager?: LoadingManager );
	splitLayer: boolean;

	load( url: string, onLoad: ( object: Group ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( data: string ) : Group;

}
