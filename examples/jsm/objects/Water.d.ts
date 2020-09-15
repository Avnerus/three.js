import { Side } from "../../../src/constants";
import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";
import { Color } from "../../../src/math/Color";
import { Vector3 } from "../../../src/math/Vector3";
import { Mesh } from "../../../src/objects/Mesh";
import { Texture } from "../../../src/textures/Texture";

export interface WaterOptions {
	textureWidth?: number;
	textureHeight?: number;
	clipBias?: number;
	alpha?: number;
	time?: number;
	waterNormals?: Texture;
	sunDirection?: Vector3;
	sunColor?: Color | string | number;
	waterColor?: Color | string | number;
	eye?: Vector3;
	distortionScale?: number;
	side?: Side;
	fog?: boolean;
}

export class Water extends Mesh {

	constructor(geometry: Geometry | BufferGeometry, options: WaterOptions);

}
