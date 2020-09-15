import { Curve } from "../../../src/extras/core/Curve";
import { Vector2 } from "../../../src/math/Vector2";
import { Vector3 } from "../../../src/math/Vector3";
import { Vector4 } from "../../../src/math/Vector4";

export class NURBSCurve extends Curve<Vector3> {

	constructor(degree: number, knots: number[], controlPoints: Vector2[] | Vector3[] | Vector4[], startKnot: number, endKnot: number);

}
