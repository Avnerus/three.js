import { AnimationClip } from "../../../src/animation/AnimationClip";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Scene } from "../../../src/scenes/Scene";

export interface Collada {
	animations: AnimationClip[];
	kinematics: object;
	library: object;
	scene: Scene;
}

export class ColladaLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( collada: Collada ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( text: string, path: string ) : Collada;

}
