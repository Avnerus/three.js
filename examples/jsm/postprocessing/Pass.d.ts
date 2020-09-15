import { Material } from "../../../src/materials/Material";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";

export class Pass {

	constructor();
	enabled: boolean;
	needsSwap: boolean;
	clear: boolean;
	renderToScreen: boolean;

	setSize(width: number, height: number): void;
	render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number, maskActive: boolean): void;

}

export namespace Pass {
	class FullScreenQuad {

		constructor(material?: Material);

		render( renderer: WebGLRenderer ): void;
		dispose(): void;

		material: Material;

	}
}
