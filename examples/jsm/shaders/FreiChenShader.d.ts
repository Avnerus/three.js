import { Uniform } from "../../../src/core/Uniform";

export const FreiChenShader: {
	uniforms: {
		tDiffuse: Uniform;
		aspect: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
