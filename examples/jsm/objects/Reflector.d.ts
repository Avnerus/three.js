import { TextureEncoding } from "../../../src/constants";
import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Color } from "../../../src/math/Color";
import { Mesh } from "../../../src/objects/Mesh";
import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";

export interface ReflectorOptions {
	color?: Color;
	textureWidth?: number;
	textureHeight?: number;
	clipBias?: number;
	shader?: object;
	encoding?: TextureEncoding;
}

export class Reflector extends Mesh {

	constructor(geometry?: BufferGeometry, options?: ReflectorOptions);

	getRenderTarget(): WebGLRenderTarget;

}
