import { OrthographicCamera } from "../../../src/cameras/OrthographicCamera";
import { ShaderMaterial } from "../../../src/materials/Materials";
import { Vector3 } from "../../../src/math/Vector3";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";
import { Scene } from "../../../src/scenes/Scene";
import { Mesh } from "../../../src/objects/Mesh";

export class Ocean {

	constructor(renderer: WebGLRenderer, camera?: OrthographicCamera, scene?: Scene, options?: object);

	changed: boolean;
	initial: boolean;

	oceanCamera: OrthographicCamera
	renderer: WebGLRenderer;
	scene: Scene;

	clearColor: number[];
	geometryOrigin: number[];
	sunDirectionX: number;
	sunDirectionY: number;
	sunDirectionZ: number;
	oceanColor: Vector3;
	skyColor: Vector3;
	exposure: number;
	geometryResolution: number;
	geometrySize: number;
	resolution: number;
	floatSize: number;
	windX: number;
	windY: number;
	size: number;
	choppiness: number;

	initialSpectrumFramebuffer: WebGLRenderTarget;
	spectrumFramebuffer: WebGLRenderTarget;
	pingPhaseFramebuffer: WebGLRenderTarget;
	pongPhaseFramebuffer: WebGLRenderTarget;
	pingTransformFramebuffer: WebGLRenderTarget;
	pongTransformFramebuffer: WebGLRenderTarget;
	displacementMapFramebuffer: WebGLRenderTarget;
	normalMapFramebuffer: WebGLRenderTarget;

	matrixNeedsUpdate: boolean;

	materialOceanHorizontal: ShaderMaterial;
	materialOceanVertical: ShaderMaterial;
	materialInitialSpectrum: ShaderMaterial;
	materialPhase: ShaderMaterial;
	materialSpectrum: ShaderMaterial;
	materialNormal: ShaderMaterial;
	materialOcean: ShaderMaterial;

	screenQuad: Mesh;

	generateSeedPhaseTexture(): void;
	generateMesh(): void;
	render(): void;
	renderInitialSpectrum(): void;
	renderWavePhase(): void;
	renderSpectrum(): void;
	renderSpectrumFFT(): void;
	renderNormalMap(): void;

}
