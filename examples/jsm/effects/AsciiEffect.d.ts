import { Camera } from "../../../src/cameras/Camera";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { Scene } from "../../../src/scenes/Scene";

export interface AsciiEffectOptions {
	resolution?: number;
	scale?: number;
	color?: boolean;
	alpha?: boolean;
	block?: boolean;
	invert?: boolean;
}

export class AsciiEffect {

	constructor( renderer: WebGLRenderer, charSet?: string, options?: AsciiEffectOptions );
	domElement: HTMLElement;

	render( scene: Scene, camera: Camera ): void;
	setSize( width: number, height: number ): void;

}
