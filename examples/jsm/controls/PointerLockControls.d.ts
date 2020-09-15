import { EventDispatcher } from "../../../src/core/EventDispatcher";
import { Camera } from "../../../src/cameras/Camera";
import { Vector3 } from "../../../src/math/Vector3";

export class PointerLockControls extends EventDispatcher {

	constructor(camera: Camera, domElement?: HTMLElement);

	domElement: HTMLElement;

	// API

	isLocked: boolean;

	minPolarAngle: number;
	maxPolarAngle: number;

	connect(): void;
	disconnect(): void;
	dispose(): void;
	getObject(): Camera;
	getDirection(v: Vector3): Vector3;
	moveForward( distance: number ): void;
	moveRight( distance: number ): void;
	lock(): void;
	unlock(): void;

}
