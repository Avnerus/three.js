import { Uniform } from "../../../src/core/Uniform";

export const GammaCorrectionShader: {
	uniforms: {
		tDiffuse: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
