import { Camera } from '../../../../src/cameras/Camera';
import { OrthographicCamera } from '../../../../src/cameras/OrthographicCamera';
import { Mesh } from '../../../../src/objects/Mesh';
import { WebGLRenderer } from '../../../../src/renderers/WebGLRenderer';
import { WebGLRenderTarget } from '../../../../src/renderers/WebGLRenderTarget';
import { Scene } from '../../../../src/scenes/Scene';
import { NodeFrame } from '../core/NodeFrame';
import { ScreenNode } from '../inputs/ScreenNode';
import { NodeMaterial } from '../materials/NodeMaterial';

export class NodePostProcessing {

	constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

	renderer: WebGLRenderer;
	renderTarget: WebGLRenderTarget;

	output: ScreenNode;
	material: NodeMaterial

	camera: OrthographicCamera;
	scene: Scene;

	quad: Mesh;
	needsUpdate: boolean;

	render(scene: Scene, camera: Camera, frame: NodeFrame): void;
	setSize( width: number, height: number ): void;
	copy( source: NodePostProcessing ): this;
	toJSON( meta?: object | string ): object;

}
