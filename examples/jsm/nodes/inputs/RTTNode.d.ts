import { OrthographicCamera } from '../../../../src/cameras/OrthographicCamera';
import { Mesh } from '../../../../src/objects/Mesh';
import { WebGLRenderTarget, WebGLRenderTargetOptions } from '../../../../src/renderers/WebGLRenderTarget';
import { Scene } from '../../../../src/scenes/Scene';
import { NodeBuilder } from '../core/NodeBuilder';
import { NodeFrame } from '../core/NodeFrame';
import { TextureNode } from './TextureNode';

export interface RTTNodeOptions extends WebGLRenderTargetOptions {
	clear?: boolean;
}

export class RTTNode extends TextureNode {

	constructor( width: number, height: number, input: TextureNode, options?: RTTNodeOptions );

	input: TextureNode;
	clear: boolean;
	renderTarget: WebGLRenderTarget;
	material: object; // NodeMaterial
	camera: OrthographicCamera;
	scene: Scene;
	quad: Mesh;
	render: boolean;

	build( builder: NodeBuilder, output: string, uuid?: string ): string;
	updateFramesaveTo( frame: NodeFrame ): void;
	updateFrame( frame: NodeFrame ): void;
	copy( source: RTTNode ): this;

}
