import { Camera } from "../../../src/cameras/Camera";
import { Matrix3 } from "../../../src/math/Matrix3";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";

export class AnaglyphEffect {

	constructor(renderer: WebGLRenderer, width?: number, height?: number);
	colorMatrixLeft: Matrix3;
	colorMatrixRight: Matrix3;

	dispose(): void;
	render(scene: Scene, camera: Camera): void;
	setSize( width: number, height: number ): void;

}
