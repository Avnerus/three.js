import { CompressedPixelFormat } from "../../../src/constants";
import { CompressedTextureLoader } from "../../../src/loaders/CompressedTextureLoader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export interface PVR {
	mipmaps: object[];
	width: number;
	height: number;
	format: CompressedPixelFormat;
	mipmapCount: number;
	isCubemap: boolean;
}

export class PVRLoader extends CompressedTextureLoader {

	constructor( manager?: LoadingManager );

	parse( buffer: ArrayBuffer, loadMipmaps: boolean ): PVR;

}
