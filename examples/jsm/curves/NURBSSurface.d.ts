import { Vector2 } from "../../../src/math/Vector2";
import { Vector3 } from "../../../src/math/Vector3";
import { Vector4 } from "../../../src/math/Vector4";

export class NURBSSurface {

	constructor(degree1: number, degree2: number, knots1: number[], knots2: number[], controlPoints: Vector2[][] | Vector3[][] | Vector4[][]);

	getPoint( t1: number, t2: number, target: Vector3 ): void;

}
