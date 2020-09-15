import { RectAreaLight } from "../../../src/lights/RectAreaLight";
import { Color } from "../../../src/math/Color";
import { Line } from "../../../src/objects/Line";

export class RectAreaLightHelper extends Line {

	constructor(light: RectAreaLight, color?: Color | string | number);

	light: RectAreaLight;
	color: Color | string | number | undefined;

	update(): void;
	dispose(): void;

}
