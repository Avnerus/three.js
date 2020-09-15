import { ShaderMaterial } from '../../../src/materials/Materials';
import { Texture } from '../../../src/textures/Texture';
import { Pass } from './Pass';

export class TexturePass extends Pass {

	constructor(map: Texture, opacity?: number);
	map: Texture;
	opacity: number;
	uniforms: object;
	material: ShaderMaterial;
	fsQuad: object;

}
