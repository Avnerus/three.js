import { Object3D } from "../../../src/core/Object3D";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Material } from "../../../src/materials/Material";

export interface LWO {
	materials: Material[];
	meshes: Object3D[];
}

export interface LWOLoaderParameters {

	/**
	* Base content delivery folder path, use when it differs from Lightwave default structure
	*/
	resourcePath?: string;

}

export class LWOLoader extends Loader {

	constructor( manager?: LoadingManager, parameters?: LWOLoaderParameters );

	load( url: string, onLoad: ( lwo: LWO ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( data: ArrayBuffer, path: string, modelName: string ): LWO;

}
