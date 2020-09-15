import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Scene } from "../../../src/scenes/Scene";

export class VRMLLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( scene: Scene ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( data: string, path: string ) : Scene;

}
