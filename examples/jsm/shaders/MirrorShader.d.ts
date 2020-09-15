import { Uniform } from "../../../src/core/Uniform";

export const MirrorShader: {
	uniforms: {
		tDiffuse: Uniform;
		side: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
