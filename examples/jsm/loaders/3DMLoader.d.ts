import { Object3D } from "../../../src/core/Object3D";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export class Rhino3dmLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( object: Object3D ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ): void;
	parse( data: ArrayBufferLike, onLoad: ( object: Object3D ) => void, onError?: ( event: ErrorEvent ) => void ): void;
	setLibraryPath( path: string ): Rhino3dmLoader;
	setWorkerLimit( workerLimit: number ): Rhino3dmLoader;
	dispose(): Rhino3dmLoader;

}
