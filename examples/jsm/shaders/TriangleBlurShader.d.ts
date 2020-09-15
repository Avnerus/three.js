import { Uniform } from "../../../src/core/Uniform";

export const TriangleBlurShader: {
	uniforms: {
		texture: Uniform;
		delta: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
