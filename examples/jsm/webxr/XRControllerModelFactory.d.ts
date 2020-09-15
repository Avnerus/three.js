import { Object3D } from '../../../src/core/Object3D';
import { Group } from '../../../src/objects/Group';
import { Texture } from '../../../src/textures/Texture';
import { GLTFLoader } from '../loaders/GLTFLoader';

export class XRControllerModel extends Object3D {

	constructor();

	motionController: any;

	setEnvironmentMap(envMap: Texture): XRControllerModel;

}

export class XRControllerModelFactory {

	constructor( gltfLoader?: GLTFLoader );
	gltfLoader: GLTFLoader | null;
	path: string;

	createControllerModel(controller: Group): XRControllerModel;

}
