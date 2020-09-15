import { Object3D } from "../../../src/core/Object3D";
import { LineSegments } from "../../../src/objects/LineSegments";

export class VertexTangentsHelper extends LineSegments {

	constructor(
		object: Object3D,
		size?: number,
		hex?: number
	);

	object: Object3D;
	size: number;

	update(): void;

}
