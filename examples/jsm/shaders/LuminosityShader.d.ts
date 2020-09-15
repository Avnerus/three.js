import { Uniform } from "../../../src/core/Uniform";

export const LuminosityShader: {
	uniforms: {
		tDiffuse: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
