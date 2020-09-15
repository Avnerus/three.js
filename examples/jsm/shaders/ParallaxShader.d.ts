import { Uniform } from "../../../src/core/Uniform";

export const ParallaxShader: {
	modes: {
		none: string;
		basic: string;
		steep: string;
		occlusion: string;
		relief: string;
	};
	uniforms: {
		bumpMap: Uniform;
		map: Uniform;
		parallaxScale: Uniform;
		parallaxMinLayers: Uniform;
		parallaxMaxLayers: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
