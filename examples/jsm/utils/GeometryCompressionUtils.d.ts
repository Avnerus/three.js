import { Mesh } from "../../../src/objects/Mesh";

export namespace GeometryCompressionUtils {

	export function compressNormals(mesh: Mesh, encodeMethod: String): void;
	export function compressPositions( mesh: Mesh ): void;
	export function compressUvs( mesh: Mesh ): void;

}
