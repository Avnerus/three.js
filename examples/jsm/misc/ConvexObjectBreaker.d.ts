import { Object3D } from "../../../src/core/Object3D";
import { Plane } from "../../../src/math/Plane";
import { Vector3 } from "../../../src/math/Vector3";

export interface CutByPlaneOutput {
	object1: Object3D;
	object2: Object3D;
}

export class ConvexObjectBreaker {

	constructor( minSizeForBreak?: number, smallDelta?: number );
	prepareBreakableObject(object: Object3D, mass: number, velocity: Vector3, angularVelocity: Vector3, breakable: boolean): void;
	subdivideByImpact(object: Object3D, pointOfImpact: Vector3, normal: Vector3, maxRadialIterations: number, maxRandomIterations: number): Object3D[];
	cutByPlane(object: Object3D, plane: Plane, output: CutByPlaneOutput): number;

}
