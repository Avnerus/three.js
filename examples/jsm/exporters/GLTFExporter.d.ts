import { AnimationClip } from "../../../src/animation/AnimationClip";
import { Object3D } from "../../../src/core/Object3D";

export interface GLTFExporterOptions {
	binary?: boolean;
	trs?: boolean;
	onlyVisible?: boolean;
	truncateDrawRange?: boolean;
	embedImages?: boolean;
	animations?: AnimationClip[];
	forceIndices?: boolean;
	forcePowerOfTwoTextures?: boolean;
	includeCustomExtensions?: boolean;
}

export class GLTFExporter {

	constructor();

	parse( input: Object3D, onCompleted: ( gltf: object ) => void, options: GLTFExporterOptions ): void;

}
