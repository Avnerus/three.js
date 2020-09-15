import { AnimationClip } from "../../../src/animation/AnimationClip";
import { BufferAttribute } from "../../../src/core/BufferAttribute";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export interface MDD {
	morphTargets: BufferAttribute[];
	clip: AnimationClip;
}

export class MDDLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( result: MDD ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( data: ArrayBuffer ) : MDD;

}
