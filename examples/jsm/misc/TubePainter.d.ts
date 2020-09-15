import { Matrix4 } from "../../../src/math/Matrix4";
import { Vector3 } from "../../../src/math/Vector3";
import { Mesh } from "../../../src/objects/Mesh";

export class TubePainter {

	constructor();

	mesh: Mesh;

	stroke(position1: Vector3, position2: Vector3, matrix1: Matrix4, matrix2: Matrix4): void;
	updateGeometry( start: number, end: number ): void;

}
