import { Geometry } from "../../../src/core/Geometry";

export class TessellateModifier {

	constructor( maxEdgeLength: number );
	maxEdgeLength: number;

	modify( geometry: Geometry ): void;

}
