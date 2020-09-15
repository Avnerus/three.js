import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";
import { Material } from "../../../src/materials/Material";
import { Group } from "../../../src/objects/Group";

export class LDrawLoader extends Loader {

	constructor( manager?: LoadingManager );

	load(url: string, onLoad: (data: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	setFileMap(fileMap: Record<string, string>): void;
	setMaterials(materials: Material[]): void;

	parse( text: string, path: string, onLoad: ( data: Group ) => void ): void;

	addMaterial( material: Material ): void;
	getMaterial( colourCode: string ): Material | null;

}
