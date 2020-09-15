import { InstancedBufferGeometry } from "../../../src/core/InstancedBufferGeometry";
import { EdgesGeometry, WireframeGeometry } from "../../../src/geometries/Geometries";
import { Matrix4 } from "../../../src/math/Matrix4";
import { LineSegments } from "../../../src/objects/LineSegments";
import { Mesh } from "../../../src/objects/Mesh";

export class LineSegmentsGeometry extends InstancedBufferGeometry {

	constructor();
	readonly isLineSegmentsGeometry: true;

	applyMatrix4(matrix: Matrix4): this;
	computeBoundingBox(): void;
	computeBoundingSphere(): void;
	fromEdgesGeometry(geometry: WireframeGeometry): this;
	fromLineSegments(lineSegments: LineSegments): this;
	fromMesh(mesh: Mesh): this;
	fromWireframeGeometry( geometry: EdgesGeometry ): this;
	setColors( array: number[] | Float32Array ): this;
	setPositions( array: number[] | Float32Array ): this;

}
