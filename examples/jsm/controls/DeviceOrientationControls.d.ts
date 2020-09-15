import { Camera } from "../../../src/cameras/Camera";
import { EventDispatcher } from "../../../src/core/EventDispatcher";

export class DeviceOrientationControls extends EventDispatcher {

	constructor(object: Camera);

	object: Camera;

	// API

	alphaOffset: number;
	deviceOrientation: any;
	enabled: boolean;
	screenOrientation: number;

	connect(): void;
	disconnect(): void;
	dispose(): void;
	update(): void;

}
