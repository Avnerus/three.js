import { Uniform } from "../../../src/core/Uniform";

export const BrightnessContrastShader: {
	uniforms: {
		tDiffuse: Uniform;
		brightness: Uniform;
		contrast: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
