import { PerspectiveCamera } from "../../../src/cameras/PerspectiveCamera";
import { ShaderMaterial } from "../../../src/materials/Materials";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";

export class CinematicCamera extends PerspectiveCamera {

	constructor( fov: number, aspect: number, near: number, far: number );

	postprocessing: {
		enabled: boolean;
	};
	shaderSettings: {
		rings: number;
		samples: number;
	};
	materialDepth: ShaderMaterial;
	coc: number;
	aperture: number;
	fNumber: number;
	hyperFocal: number;
	filmGauge: number;

	linearize( depth: number ): number;
	smoothstep( near: number, far: number, depth: number ): number;
	saturate( x: number ): number;
	focusAt( focusDistance: number ): void;
	initPostProcessing(): void;
	renderCinematic(scene: Scene, renderer: WebGLRenderer): void;

}
