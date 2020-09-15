import { Camera } from "../../../src/cameras/Camera";
import { Object3D } from "../../../src/core/Object3D";
import { Frustum } from "../../../src/math/Frustum";
import { Vector3 } from "../../../src/math/Vector3";
import { Mesh } from "../../../src/objects/Mesh";
import { Scene } from "../../../src/scenes/Scene";

export class SelectionBox {

	constructor(camera: Camera, scene: Scene, deep?: number);
	camera: Camera;
	collection: Mesh[];
	deep: number;
	endPoint: Vector3;
	scene: Scene;
	startPoint: Vector3;

	select( startPoint?: Vector3, endPoint?: Vector3 ): Mesh[];
	updateFrustum(startPoint: Vector3, endPoint: Vector3): void;
	searchChildInFrustum(frustum: Frustum, object: Object3D): void;

}
