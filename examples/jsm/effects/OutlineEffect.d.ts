import { Camera } from "../../../src/cameras/Camera";
import { Vector2 } from "../../../src/math/Vector2";
import { Vector4 } from "../../../src/math/Vector4";
import { WebGLShadowMap } from "../../../src/renderers/webgl/WebGLShadowMap";
import { WebGLRenderer } from "../../../src/renderers/WebGLRenderer";
import { WebGLRenderTarget } from "../../../src/renderers/WebGLRenderTarget";
import { Scene } from "../../../src/scenes/Scene";

export interface OutlineEffectParameters {
	defaultThickness?: number;
	defaultColor?: number[];
	defaultAlpha?: number;
	defaultKeepAlive?: boolean;
}

export class OutlineEffect {

	constructor( renderer: WebGLRenderer, parameters: OutlineEffectParameters );
	enabled: boolean;
	autoClear: boolean;
	domElement: HTMLElement;
	shadowMap: WebGLShadowMap;

	clear( color?: boolean, depth?: boolean, stencil?: boolean ): void;
	getPixelRatio(): number;
	getSize( target: Vector2 ): Vector2;
	render( scene: Scene, camera: Camera ): void;
	renderOutline( scene: Scene, camera: Camera ): void;
	setRenderTarget( renderTarget: WebGLRenderTarget | null ): void;
	setPixelRatio( value: number ): void;
	setScissor( x: Vector4 | number, y?: number, width?: number, height?: number ): void;
	setScissorTest( enable: boolean ): void;
	setSize( width: number, height: number, updateStyle?: boolean ): void;
	setViewport( x: Vector4 | number, y?: number, width?: number, height?: number ): void;

}
