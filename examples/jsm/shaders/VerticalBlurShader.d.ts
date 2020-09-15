import { Uniform } from "../../../src/core/Uniform";

export const VerticalBlurShader: {
	uniforms: {
		tDiffuse: Uniform;
		v: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
