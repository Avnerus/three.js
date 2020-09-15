import { Texture } from '../../../../src/textures/Texture';
import { UVNode } from '../accessors/UVNode';
import { InputNode } from '../core/InputNode';
import { Node } from '../core/Node';
import { NodeBuilder } from '../core/NodeBuilder';

export class TextureNode extends InputNode {

	constructor( value: Texture, uv?: UVNode, bias?: Node, project?: boolean );

	value: Texture;
	uv: UVNode;
	bias: Node;
	project: boolean;
	nodeType: string;

	getTexture( builder: NodeBuilder, output: string ): string;
	copy( source: TextureNode ): this;

}
