import { Uniform } from "../../../src/core/Uniform";

export const DOFMipMapShader: {
	uniforms: {
		tColor: Uniform;
		tDepth: Uniform;
		focus: Uniform;
		maxblur: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
