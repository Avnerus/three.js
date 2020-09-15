import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";
import { Vector3 } from "../../../src/math/Vector3";

export class ConvexGeometry extends Geometry {

	constructor(points: Vector3[]);

}

export class ConvexBufferGeometry extends BufferGeometry {

	constructor( points: Vector3[] );

}
