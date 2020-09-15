import { Plane } from "../../../src/math/Plane";
import { Vector4 } from "../../../src/math/Vector4";
import { Mesh } from "../../../src/objects/Mesh";

export class ShadowMesh extends Mesh {

	constructor();

	update(plane: Plane, lightPosition4D: Vector4): void;

}
