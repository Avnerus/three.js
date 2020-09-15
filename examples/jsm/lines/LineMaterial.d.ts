import { MaterialParameters } from "../../../src/materials/Material";
import { ShaderMaterial } from "../../../src/materials/Materials";
import { Color } from "../../../src/math/Color";
import { Vector2 } from "../../../src/math/Vector2";

export interface LineMaterialParameters extends MaterialParameters {
	color?: number;
	dashed?: boolean;
	dashScale?: number;
	dashSize?: number;
	gapSize?: number;
	linewidth?: number;
	resolution?: Vector2;
}

export class LineMaterial extends ShaderMaterial {

	constructor(parameters?: LineMaterialParameters);
	color: Color;
	dashed: boolean;
	dashScale: number;
	dashSize: number;
	gapSize: number;
	opacity: number;
	readonly isLineMaterial: true;
	linewidth: number;
	resolution: Vector2;

}
