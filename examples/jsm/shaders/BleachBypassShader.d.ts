import { Uniform } from "../../../src/core/Uniform";

export const BleachBypassShader: {
	uniforms: {
		tDiffuse: Uniform;
		opacity: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
