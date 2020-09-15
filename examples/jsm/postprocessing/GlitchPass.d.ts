import { ShaderMaterial } from '../../../src/materials/Materials';
import { DataTexture } from '../../../src/textures/DataTexture';
import { Pass } from './Pass';

export class GlitchPass extends Pass {

	constructor( dt_size?: number );
	uniforms: object;
	material: ShaderMaterial;
	fsQuad: object;
	goWild: boolean;
	curF: number;
	randX: number;

	generateTrigger(): void;
	generateHeightmap(dt_size: number): DataTexture;

}
