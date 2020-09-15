import { Camera } from "../../../src/cameras/Camera";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";

export class StereoEffect {

	constructor(renderer: WebGLRenderer);

	setEyeSeparation(eyeSep: number): void;
	render(scene: Scene, camera: Camera): void;
	setSize( width: number, height: number ): void;

}
