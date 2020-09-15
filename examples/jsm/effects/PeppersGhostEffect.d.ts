import { Camera } from "../../../src/cameras/Camera";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";

export class PeppersGhostEffect {

	constructor( renderer: WebGLRenderer );
	cameraDistance: number;
	reflectFromAbove: boolean;

	render( scene: Scene, camera: Camera ): void;
	setSize( width: number, height: number ): void;

}
