import { Mesh } from '../../../../../src/objects/Mesh';
import { MaterialHandler } from './MaterialHandler';

export class MeshReceiver {

	constructor( materialHandler: MaterialHandler );
	logging: {
		enabled: boolean;
		debug: boolean;
	};
	callbacks: {
		onParseProgress: Function;
		onMeshAlter: Function;
	};
	materialHandler: MaterialHandler;

	buildMeshes(meshPayload: object): Mesh[];
	setLogging( enabled: boolean, debug: boolean ): void;

}
