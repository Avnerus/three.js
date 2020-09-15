import { LightProbe } from "../../../src/lights/LightProbe";
import { WebGLCubeRenderTarget } from "../../../src/renderers/WebGLCubeRenderTarget";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { CubeTexture } from "../../../src/textures/CubeTexture";

export namespace LightProbeGenerator {

	export function fromCubeTexture(cubeTexture: CubeTexture): LightProbe;
	export function fromCubeRenderTarget(renderer: WebGLRenderer, cubeRenderTarget: WebGLCubeRenderTarget): LightProbe;

}
