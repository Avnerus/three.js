import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Euler } from "../../../src/math/Euler";
import { Vector3 } from "../../../src/math/Vector3";
import { Mesh } from "../../../src/objects/Mesh";

export class DecalGeometry extends BufferGeometry {

	constructor(mesh: Mesh, position: Vector3, orientation: Euler, size: Vector3);

}

export class DecalVertex {

	constructor( position: Vector3, normal: Vector3 );
	clone(): DecalVertex;

}
