import { Box3 } from "../../../src/math/Box3";
import { Matrix3 } from "../../../src/math/Matrix3";
import { Matrix4 } from "../../../src/math/Matrix4";
import { Plane } from "../../../src/math/Plane";
import { Ray } from "../../../src/math/Ray";
import { Sphere } from "../../../src/math/Sphere";
import { Vector3 } from "../../../src/math/Vector3";

export class OBB {

	center: Vector3;
	halfSize: Vector3;
	rotation: Matrix3;

	constructor( center: Vector3, halfSize: Vector3, rotation: Matrix3 );
	set( center: Vector3, halfSize: Vector3, rotation: Matrix3 ): this;
	copy( obb: OBB ): this;
	clone(): OBB;
	getSize( result: Vector3 ): Vector3;
	clampPoint( point: Vector3, result: Vector3 ): Vector3;
	containsPoint(point: Vector3): boolean;
	intersectsBox3(box3: Box3): boolean;
	intersectsSphere(sphere: Sphere): boolean;
	intersectsOBB(obb: OBB, epsilon: number): boolean;
	intersectsPlane(plane: Plane): boolean;
	intersectRay(ray: Ray, result: Vector3): Vector3 | null;
	intersectsRay( ray: Ray ): boolean;
	fromBox3( box3: Box3 ): this;
	equals(obb: OBB): boolean;
	applyMatrix4(matrix: Matrix4): this;

}
