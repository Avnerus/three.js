import { BoxBufferGeometry } from "../../../src/geometries/Geometries";
import { ShaderMaterial } from "../../../src/materials/Materials";
import { Mesh } from "../../../src/objects/Mesh";

export class Sky extends Mesh {

	constructor();

	geometry: BoxBufferGeometry;
	material: ShaderMaterial;

	static SkyShader: object;

}
