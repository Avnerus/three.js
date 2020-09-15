import { Uniform } from "../../../src/core/Uniform";

export const AfterimageShader: {
	uniforms: {
		damp: Uniform;
		tOld: Uniform;
		tNew: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
