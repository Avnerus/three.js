import { Uniform } from "../../../src/core/Uniform";

export const UnpackDepthRGBAShader: {
	uniforms: {
		tDiffuse: Uniform;
		opacity: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
