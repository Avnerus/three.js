import { Color } from "../../../src/math/Color";
import { Mesh } from "../../../src/objects/Mesh";
import { Texture } from "../../../src/textures/Texture";

export class LensflareElement {

	constructor(texture: Texture, size?: number, distance?: number, color?: Color);
	texture: Texture;
	size: number;
	distance: number;
	color: Color;

}

export class Lensflare extends Mesh {

	constructor();
	readonly isLensflare: true;

	addElement( element: LensflareElement ): void;
	dispose(): void;

}
