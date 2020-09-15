import { ShaderMaterial } from '../../../src/materials/Materials';
import { WebGLRenderTarget } from '../../../src/renderers/WebGLRenderTarget';
import { Pass } from './Pass';

export class AfterimagePass extends Pass {

	constructor( damp?: number );
	shader: object;
	uniforms: object;
	textureComp: WebGLRenderTarget;
	textureOld: WebGLRenderTarget;
	shaderMaterial: ShaderMaterial;
	compFsQuad: object;
	copyFsQuad: object;

}
