import { Camera } from "../../../src/cameras/Camera";
import { EventDispatcher } from "../../../src/core/EventDispatcher";
import { Object3D } from "../../../src/core/Object3D";

export class DragControls extends EventDispatcher {

	constructor(objects: Object3D[], camera: Camera, domElement?: HTMLElement);

	object: Camera;

	// API

	enabled: boolean;
	transformGroup: boolean;

	activate(): void;
	deactivate(): void;
	dispose(): void;
	getObjects(): Object3D[];

}
