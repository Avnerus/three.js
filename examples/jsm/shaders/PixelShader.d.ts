import { Uniform } from "../../../src/core/Uniform";

export const PixelShader: {
	uniforms: {
		tDiffuse: Uniform;
		resolution: Uniform;
		pixelSize: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
