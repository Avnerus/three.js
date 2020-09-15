import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";

export class SubdivisionModifier {

	constructor( subdivisions?: number );
	subdivisions: number;

	modify( geometry: BufferGeometry | Geometry ): Geometry;
	smooth( geometry: Geometry ): void;

}
