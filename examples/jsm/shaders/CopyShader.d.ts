import { Uniform } from "../../../src/core/Uniform";

export const CopyShader: {
	uniforms: {
		tDiffuse: Uniform;
		opacity: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
