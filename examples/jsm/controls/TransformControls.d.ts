import { Camera } from "../../../src/cameras/Camera";
import { MOUSE } from "../../../src/constants";
import { Object3D } from "../../../src/core/Object3D";

export class TransformControls extends Object3D {

	constructor(object: Camera, domElement?: HTMLElement);

	domElement: HTMLElement;

	// API

	camera: Camera;
	object: Object3D | undefined;
	enabled: boolean;
	axis: string | null;
	mode: string;
	translationSnap: number | null;
	rotationSnap: number | null;
	space: string;
	size: number;
	dragging: boolean;
	showX: boolean;
	showY: boolean;
	showZ: boolean;
	readonly isTransformControls: true;
	mouseButtons: {
		LEFT: MOUSE;
		MIDDLE: MOUSE;
		RIGHT: MOUSE;
	};

	attach( object: Object3D ): this;
	detach(): this;
	getMode(): string;
	setMode( mode: string ): void;
	setTranslationSnap( translationSnap: Number | null ): void;
	setRotationSnap( rotationSnap: Number | null ): void;
	setSize( size: number ): void;
	setSpace( space: string ): void;
	dispose(): void;

}
