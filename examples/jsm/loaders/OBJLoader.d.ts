import { Loader } from '../../../src/loaders/Loader';
import { LoadingManager } from '../../../src/loaders/LoadingManager';
import { Group } from '../../../src/objects/Group';
import { MTLLoader } from './MTLLoader';

export class OBJLoader extends Loader {

	constructor( manager?: LoadingManager );
	materials: MTLLoader.MaterialCreator;

	load(url: string, onLoad: (group: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse( data: string ) : Group;
	setMaterials( materials: MTLLoader.MaterialCreator ) : this;

}
