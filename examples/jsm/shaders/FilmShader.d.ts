import { Uniform } from "../../../src/core/Uniform";

export const FilmShader: {
	uniforms: {
		tDiffuse: Uniform;
		time: Uniform;
		nIntensity: Uniform;
		sIntensity: Uniform;
		sCount: Uniform;
		grayscale: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
