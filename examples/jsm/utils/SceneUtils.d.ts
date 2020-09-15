import { Geometry } from "../../../src/core/Geometry";
import { Object3D } from "../../../src/core/Object3D";
import { Material } from "../../../src/materials/Material";
import { Group } from "../../../src/objects/Group";
import { InstancedMesh } from "../../../src/objects/InstancedMesh";
import { Scene } from "../../../src/scenes/Scene";

export namespace SceneUtils {
	export function createMeshesFromInstancedMesh(instancedMesh: InstancedMesh): Group;
	export function createMultiMaterialObject(geometry: Geometry, materials: Material[]): Group;
	/**
	 * @deprecated Use scene.attach( child ) instead.
	 */
	export function detach( child: Object3D, parent: Object3D, scene: Scene ): void;
	/**
	 * @deprecated Use parent.attach( child ) instead.
	 */
	export function attach( child: Object3D, scene: Scene, parent: Object3D ): void;
}
