import { Camera } from "../../../src/cameras/Camera";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";

export class ParallaxBarrierEffect {

	constructor(renderer: WebGLRenderer);

	render(scene: Scene, camera: Camera): void;
	setSize( width: number, height: number ): void;

}
