import { Uniform } from "../../../src/core/Uniform";

export const ColorifyShader: {
	uniforms: {
		tDiffuse: Uniform;
		color: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
