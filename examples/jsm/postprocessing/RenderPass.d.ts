import { Camera } from '../../../src/cameras/Camera';
import { Material } from '../../../src/materials/Material';
import { Color } from '../../../src/math/Color';
import { Scene } from '../../../src/scenes/Scene';
import { Pass } from './Pass';

export class RenderPass extends Pass {

	constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
	scene: Scene;
	camera: Camera;
	overrideMaterial: Material;
	clearColor: Color;
	clearAlpha: number;
	clearDepth: boolean;

}
