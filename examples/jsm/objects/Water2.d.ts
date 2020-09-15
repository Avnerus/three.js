import { TextureEncoding } from "../../../src/constants";
import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Geometry } from "../../../src/core/Geometry";
import { Color } from "../../../src/math/Color";
import { Vector2 } from "../../../src/math/Vector2";
import { Mesh } from "../../../src/objects/Mesh";
import { Texture } from "../../../src/textures/Texture";

export interface WaterOptions {
	color?: Color | string | number;
	textureWidth?: number;
	textureHeight?: number;
	clipBias?: number;
	flowDirection?: Vector2;
	flowSpeed?: number;
	reflectivity?: number;
	scale?: number;
	shader?: object;
	flowMap?: Texture;
	normalMap0?: Texture;
	normalMap1?: Texture;
	encoding?: TextureEncoding;
}

export class Water extends Mesh {

	constructor(geometry: Geometry | BufferGeometry, options: WaterOptions);

}
