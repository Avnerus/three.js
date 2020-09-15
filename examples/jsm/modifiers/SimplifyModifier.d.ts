import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";

export class SimplifyModifier {

	constructor();
	modify(geometry: BufferGeometry | Geometry, count: number): BufferGeometry;

}
