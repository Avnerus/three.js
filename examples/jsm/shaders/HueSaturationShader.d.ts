import { Uniform } from "../../../src/core/Uniform";

export const HueSaturationShader: {
	uniforms: {
		tDiffuse: Uniform;
		hue: Uniform;
		saturation: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
