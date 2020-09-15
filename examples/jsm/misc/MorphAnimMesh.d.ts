import { AnimationAction } from "../../../src/animation/AnimationAction";
import { AnimationMixer } from "../../../src/animation/AnimationMixer";
import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";
import { Material } from "../../../src/materials/Material";
import { Mesh } from "../../../src/objects/Mesh";

export class MorphAnimMesh extends Mesh {

	constructor( geometry: BufferGeometry | Geometry, material: Material );
	mixer: AnimationMixer;
	activeAction: AnimationAction | null;

	setDirectionForward(): void;
	setDirectionBackward(): void;
	playAnimation( label: string, fps: number ): void;
	updateAnimation( delta: number ): void;
	copy( source: MorphAnimMesh ): this;

}
