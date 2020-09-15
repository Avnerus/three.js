import { Object3D } from "../../../src/core/Object3D";

export interface ColladaExporterOptions {
	author?: string;
	textureDirectory?: string;
	version?: string;
}

export interface ColladaExporterResult {
	data: string;
	textures: object[];
}

export class ColladaExporter {

	constructor();

	parse( object: Object3D, onDone: ( res: ColladaExporterResult ) => void, options: ColladaExporterOptions ): ColladaExporterResult | null;

}
