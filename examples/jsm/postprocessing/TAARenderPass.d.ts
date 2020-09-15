import { Camera } from '../../../src/cameras/Camera';
import { Color } from '../../../src/math/Color';
import { Scene } from '../../../src/scenes/Scene';
import { SSAARenderPass } from './SSAARenderPass';

export class TAARenderPass extends SSAARenderPass {

	constructor(scene: Scene, camera: Camera, clearColor: Color | string | number, clearAlpha: number);
	accumulate: boolean;

}
