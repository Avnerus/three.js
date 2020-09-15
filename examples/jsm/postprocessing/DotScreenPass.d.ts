import { ShaderMaterial } from '../../../src/materials/Materials';
import { Vector2 } from '../../../src/math/Vector2';
import { Pass } from './Pass';

export class DotScreenPass extends Pass {

	constructor(center?: Vector2, angle?: number, scale?: number);
	uniforms: object;
	material: ShaderMaterial;
	fsQuad: object;

}
