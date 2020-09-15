import { CompressedPixelFormat, PixelFormat } from "../../../src/constants";
import { CompressedTextureLoader } from "../../../src/loaders/CompressedTextureLoader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export interface KTX {
	mipmaps: object[];
	width: number;
	height: number;
	format: PixelFormat | CompressedPixelFormat;
	mipmapCount: number;
	isCubemap: boolean;
}

export class KTXLoader extends CompressedTextureLoader {

	constructor( manager?: LoadingManager );

	parse( buffer: ArrayBuffer, loadMipmaps: boolean ) : KTX;

}
