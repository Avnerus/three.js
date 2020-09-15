import { Uniform } from "../../../src/core/Uniform";

export const FXAAShader: {
	uniforms: {
		tDiffuse: Uniform;
		resolution: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
