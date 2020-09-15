import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export class STLLoader extends Loader {

	constructor( manager?: LoadingManager );

	load(url: string, onLoad: (geometry: BufferGeometry) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse( data: ArrayBuffer | string ) : BufferGeometry;

}
