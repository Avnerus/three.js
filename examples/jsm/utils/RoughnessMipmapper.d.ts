import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { MeshStandardMaterial } from "../../../src/materials/Materials";

export class RoughnessMipmapper {

	constructor(renderer: WebGLRenderer);
	generateMipmaps(material: MeshStandardMaterial): void;
	dispose(): void;

}
