import { Clock } from '../../../src/core/Clock';
import { WebGLRenderer } from '../../../src/renderers/WebGLRenderer';
import { WebGLRenderTarget } from '../../../src/renderers/WebGLRenderTarget';
import { Pass } from './Pass';
import { ShaderPass } from './ShaderPass';

export class EffectComposer {

	constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
	renderer: WebGLRenderer;
	renderTarget1: WebGLRenderTarget;
	renderTarget2: WebGLRenderTarget;
	writeBuffer: WebGLRenderTarget;
	readBuffer: WebGLRenderTarget;
	passes: Pass[];
	copyPass: ShaderPass;
	clock: Clock;
	renderToScreen: boolean;

	swapBuffers(): void;
	addPass( pass: Pass ): void;
	insertPass( pass: Pass, index: number ): void;
	isLastEnabledPass( passIndex: number ): boolean;
	render( deltaTime?: number ): void;
	reset( renderTarget?: WebGLRenderTarget ): void;
	setSize( width: number, height: number ): void;
	setPixelRatio( pixelRatio: number ): void;

}
