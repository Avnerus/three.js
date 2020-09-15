import { PerspectiveCamera } from '../../../src/cameras/PerspectiveCamera';
import { Mesh } from '../../../src/objects/Mesh';
import { Scene } from '../../../src/scenes/Scene';
import { CubeTexture } from '../../../src/textures/CubeTexture';
import { Pass } from './Pass';

export class CubeTexturePass extends Pass {

	constructor(camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number);
	camera: PerspectiveCamera;
	cubeShader: object;
	cubeMesh: Mesh;
	envMap: CubeTexture;
	opacity: number;
	cubeScene: Scene;
	cubeCamera: PerspectiveCamera;

}
