import { Object3D } from "../../../src/core/Object3D";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";


export interface Assimp {
	animation: any;
	object: Object3D;
}

export class AssimpLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( result: Assimp ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( buffer: ArrayBuffer, path: string ) : Assimp;

}
