import { Uniform } from "../../../src/core/Uniform";

export const KaleidoShader: {
	uniforms: {
		tDiffuse: Uniform;
		sides: Uniform;
		angle: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
