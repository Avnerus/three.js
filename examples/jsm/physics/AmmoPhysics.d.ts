import { Vector3 } from "../../../src/math/Vector3";
import { Mesh } from "../../../src/objects/Mesh";

export class AmmoPhysics {

	constructor();
	addMesh(mesh: Mesh, mass: number): void;
	setMeshPosition(mesh: Mesh, position: Vector3, index: number): void;

}
