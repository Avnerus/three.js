import { Uniform } from "../../../src/core/Uniform";

export const ColorCorrectionShader: {
	uniforms: {
		tDiffuse: Uniform;
		powRGB: Uniform;
		mulRGB: Uniform;
		addRGB: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
