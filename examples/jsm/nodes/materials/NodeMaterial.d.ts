import { ShaderMaterial } from '../../../../src/materials/Materials.js';
import { WebGLRenderer } from '../../../../src/renderers/WebGLRenderer.js';
import { Node } from '../core/Node.js';
import { NodeBuilder } from '../core/NodeBuilder';
import { NodeFrame } from '../core/NodeFrame';
import { RawNode } from './nodes/RawNode';

export interface NodeMaterialBuildParams {
	builder?: NodeBuilder;
	renderer?: WebGLRenderer;
}

export class NodeMaterial extends ShaderMaterial {

	constructor( vertex: Node, fragment: Node );

	vertex: Node | RawNode;
	fragment: Node | RawNode;

	updaters: object[];

	readonly isNodeMaterial: true;
	properties: object;

	updateFrame( frame: NodeFrame ): void;
	build( params?: NodeMaterialBuildParams ): this;
	getHash(): string;
	copy( source: NodeMaterial ): this;

}
