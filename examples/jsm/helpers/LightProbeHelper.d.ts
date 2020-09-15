import { LightProbe } from "../../../src/lights/LightProbe";
import { Mesh } from "../../../src/objects/Mesh";

export class LightProbeHelper extends Mesh {

	constructor(lightProbe: LightProbe, size: number);

	lightProbe: LightProbe;
	size: number;

	dispose(): void;

}
