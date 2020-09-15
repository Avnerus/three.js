import { TextureDataType } from '../../../src/constants';
import { Loader } from '../../../src/loaders/Loader';
import { LoadingManager } from '../../../src/loaders/LoadingManager';
import { CubeTexture } from '../../../src/textures/CubeTexture';
import { RGBELoader } from './RGBELoader';

export class HDRCubeTextureLoader extends Loader {

	constructor( manager?: LoadingManager );
	hdrLoader: RGBELoader;
	type: TextureDataType;

	load(urls: string[], onLoad: (texture: CubeTexture) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	setDataType( type: TextureDataType ): this;

}
