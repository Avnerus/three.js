import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Texture } from "../../../src/textures/Texture";

export class TGALoader extends Loader {

	constructor( manager?: LoadingManager );

	load(url: string, onLoad: (texture: Texture) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse( data: ArrayBuffer ) : Texture;

}
