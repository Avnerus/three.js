import { Uniform } from "../../../src/core/Uniform";

export const RGBShiftShader: {
	uniforms: {
		tDiffuse: Uniform;
		amount: Uniform;
		angle: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
