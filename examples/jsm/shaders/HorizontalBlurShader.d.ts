import { Uniform } from "../../../src/core/Uniform";

export const HorizontalBlurShader: {
	uniforms: {
		tDiffuse: Uniform;
		h: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
