import { AnimationClip } from '../../../src/animation/AnimationClip';
import { Camera } from '../../../src/cameras/Camera';
import { Object3D } from '../../../src/core/Object3D';
import { Loader } from '../../../src/loaders/Loader';
import { LoadingManager } from '../../../src/loaders/LoadingManager';
import { Material } from '../../../src/materials/Material';
import { Group } from '../../../src/objects/Group';
import { Texture } from '../../../src/textures/Texture';
import { DDSLoader } from './DDSLoader';
import { DRACOLoader } from './DRACOLoader';

export interface GLTF {
	animations: AnimationClip[];
	scene: Group;
	scenes: Group[];
	cameras: Camera[];
	asset: {
		copyright?: string;
		generator?: string;
		version?: string;
		minVersion?: string;
		extensions?: any;
		extras?: any;
	};
	parser: GLTFParser;
	userData: any;
}

export class GLTFLoader extends Loader {

	constructor( manager?: LoadingManager );
	dracoLoader: DRACOLoader | null;
	ddsLoader: DDSLoader | null;

	load( url: string, onLoad: ( gltf: GLTF ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	setDRACOLoader( dracoLoader: DRACOLoader ): GLTFLoader;
	setDDSLoader( ddsLoader: DDSLoader ): GLTFLoader;
	parse( data: ArrayBuffer | string, path: string, onLoad: ( gltf: GLTF ) => void, onError?: ( event: ErrorEvent ) => void ) : void;

}

export interface GLTFReference {
	type: 'materials'|'nodes'|'textures';
	index: number;
}

export class GLTFParser {

	json: any;

	associations: Map<Object3D | Material | Texture, GLTFReference>;

	getDependency: ( type: string, index: number ) => Promise<any>;
	getDependencies: ( type: string ) => Promise<any[]>;

}
