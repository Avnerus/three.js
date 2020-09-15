import { Camera } from '../../../src/cameras/Camera';
import { ShaderMaterial } from '../../../src/materials/Materials';
import { Color } from '../../../src/math/Color';
import { Scene } from '../../../src/scenes/Scene';
import { Pass } from './Pass';

export class SSAARenderPass extends Pass {

	constructor(scene: Scene, camera: Camera, clearColor: Color | string | number, clearAlpha: number);
	scene: Scene;
	camera: Camera;
	sampleLevel: number;
	unbiased: boolean;
	clearColor: Color | string | number;
	clearAlpha: number;
	copyUniforms: object;
	copyMaterial: ShaderMaterial;
	fsQuad: object;

}
