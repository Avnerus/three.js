import { Uniform } from "../../../src/core/Uniform";

export const LuminosityHighPassShader: {
	shaderID: string;
	uniforms: {
		tDiffuse: Uniform;
		luminosityThreshold: Uniform;
		smoothWidth: Uniform;
		defaultColor: Uniform;
		defaultOpacity: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
