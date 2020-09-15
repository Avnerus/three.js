import { Uniform } from "../../../src/core/Uniform";

export const DotScreenShader: {
	uniforms: {
		tDiffuse: Uniform;
		tSize: Uniform;
		center: Uniform;
		angle: Uniform;
		scale: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
