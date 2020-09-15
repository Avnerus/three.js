import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";

export interface DRACOExporterOptions {
	decodeSpeed?: number;
	encodeSpeed?: number;
	encoderMethod?: number;
	quantization?: number[];
	exportUvs?: boolean;
	exportNormals?: boolean;
	exportColor?: boolean;
}

export class DRACOExporter {

	constructor();

	parse(geometry: BufferGeometry | Geometry, options: DRACOExporterOptions): Int8Array;

}
