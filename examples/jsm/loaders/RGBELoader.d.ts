import { PixelFormat, TextureDataType } from "../../../src/constants";
import { DataTextureLoader } from "../../../src/loaders/DataTextureLoader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export interface RGBE {
	width: number;
	height: number;
	data: Float32Array | Uint8Array;
	header: string;
	gamma: number;
	exposure: number;
	format: PixelFormat;
	type: TextureDataType;
}

export class RGBELoader extends DataTextureLoader {

	constructor( manager?: LoadingManager );
	type: TextureDataType;

	parse( buffer: ArrayBuffer ): RGBE;
	setDataType( type: TextureDataType ): this;

}
