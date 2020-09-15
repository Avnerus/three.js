import { Uniform } from "../../../src/core/Uniform";

export const VerticalTiltShiftShader: {
	uniforms: {
		tDiffuse: Uniform;
		v: Uniform;
		r: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
