import { Uniform } from "../../../src/core/Uniform";

export const VignetteShader: {
	uniforms: {
		tDiffuse: Uniform;
		offset: Uniform;
		darkness: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
