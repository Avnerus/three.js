import { MeshBasicMaterial, ShaderMaterial } from '../../../src/materials/Materials';
import { Color } from '../../../src/math/Color';
import { Vector2 } from '../../../src/math/Vector2';
import { Vector3 } from '../../../src/math/Vector3';
import { WebGLRenderTarget } from '../../../src/renderers/WebGLRenderTarget';
import { Pass } from './Pass';

export class UnrealBloomPass extends Pass {

	constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
	resolution: Vector2;
	strength: number;
	radius: number;
	threshold: number;
	clearColor: Color;
	renderTargetsHorizontal: WebGLRenderTarget[];
	renderTargetsVertical: WebGLRenderTarget[];
	nMips: number;
	renderTargetBright: WebGLRenderTarget;
	highPassUniforms: object;
	materialHighPassFilter: ShaderMaterial;
	separableBlurMaterials: ShaderMaterial[];
	compositeMaterial: ShaderMaterial;
	bloomTintColors: Vector3[];
	copyUniforms: object;
	materialCopy: ShaderMaterial;
	oldClearColor: Color;
	oldClearAlpha: number;
	basic: MeshBasicMaterial;
	fsQuad: object;

	dispose(): void;
	getSeperableBlurMaterial(): ShaderMaterial;
	getCompositeMaterial(): ShaderMaterial;

}
