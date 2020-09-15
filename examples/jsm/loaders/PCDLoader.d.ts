import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Points } from "../../../src/objects/Points";

export class PCDLoader extends Loader {

	constructor( manager?: LoadingManager );
	littleEndian: boolean;

	load(url: string, onLoad: (points: Points) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse( data: ArrayBuffer | string, url: string ) : Points;

}
