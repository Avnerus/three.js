import { Uniform } from "../../../src/core/Uniform";

export const FresnelShader: {
	uniforms: {
		mRefractionRatio: Uniform;
		mFresnelBias: Uniform;
		mFresnelPower: Uniform;
		mFresnelScale: Uniform;
		tCube: Uniform;
	};
	vertexShader: string;
	fragmentShader: string;
};
