import { BufferGeometry } from '../../../src/core/BufferGeometry';
import { Geometry } from '../../../src/core/Geometry';
import { LineSegmentsGeometry } from './LineSegmentsGeometry';

export class WireframeGeometry2 extends LineSegmentsGeometry {

	constructor(geometry: Geometry | BufferGeometry);
	readonly sWireframeGeometry2: boolean;

}
