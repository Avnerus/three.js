import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Loader } from "../../../src/loaders/Loader";
import { LoadingManager } from "../../../src/loaders/LoadingManager";

export interface PDB {
	geometryAtoms: BufferGeometry;
	geometryBonds: BufferGeometry;
	json: {
		atoms: any[][]
	}
}


export class PDBLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( pdb: PDB ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( text: string ) : PDB;

}
