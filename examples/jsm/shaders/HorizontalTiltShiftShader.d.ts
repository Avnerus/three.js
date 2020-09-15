import { Uniform } from "../../../src/core/Uniform";

export const HorizontalTiltShiftShader: {
	uniforms: {
		tDiffuse: Uniform;
		h: Uniform;
		r: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
