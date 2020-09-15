import { Uniform } from "../../../src/core/Uniform";

export const NormalMapShader: {
	uniforms: {
		heightMap: Uniform;
		resolution: Uniform;
		scale: Uniform;
		height: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
