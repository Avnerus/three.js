import { CompressedTextureLoader } from "../../../src/loaders/CompressedTextureLoader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { CompressedTexture } from "../../../src/textures/CompressedTexture";

export class KTX2Loader extends CompressedTextureLoader {

	constructor( manager?: LoadingManager );

	detectSupport(renderer: WebGLRenderer): KTX2Loader;
	initModule(): void;

	load(
		url: string,
		onLoad: (texture: CompressedTexture) => void,
		onProgress?: ( event: ProgressEvent ) => void,
		onError?: ( event: ErrorEvent ) => void
	): CompressedTexture;

	parse(
		buffer: ArrayBuffer,
		onLoad: ( texture: CompressedTexture ) => void,
		onError?: ( event: ErrorEvent ) => void
	): KTX2Loader;

}
