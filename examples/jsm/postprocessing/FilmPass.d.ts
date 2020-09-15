import { ShaderMaterial } from '../../../src/materials/Materials';
import { Pass } from './Pass';

export class FilmPass extends Pass {

	constructor( noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: number );
	uniforms: object;
	material: ShaderMaterial;
	fsQuad: object;

}
