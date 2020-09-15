import { Loader } from '../../../src/loaders/Loader';
import { LoadingManager } from '../../../src/loaders/LoadingManager';
import { Collada } from './ColladaLoader';

export class KMZLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( kmz: Collada ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ): void;
	parse( data: ArrayBuffer ): Collada;

}
