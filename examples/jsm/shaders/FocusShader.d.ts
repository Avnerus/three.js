import { Uniform } from "../../../src/core/Uniform";

export const FocusShader: {
	uniforms: {
		tDiffuse: Uniform;
		screenWidth: Uniform;
		screenHeight: Uniform;
		sampleDistance: Uniform;
		waveFactor: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
