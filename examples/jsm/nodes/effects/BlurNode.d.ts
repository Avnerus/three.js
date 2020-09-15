import { Vector2 } from '../../../../src/math/Vector2';
import { UVNode } from '../accessors/UVNode';
import { FunctionNode } from '../core/FunctionNode';
import { NodeFrame } from '../core/NodeFrame';
import { TempNode } from '../core/TempNode';
import { FloatNode } from '../inputs/FloatNode';
import { TextureNode } from '../inputs/TextureNode';
import { Vector2Node } from '../inputs/Vector2Node';

export class BlurNode extends TempNode {

	constructor( value: TextureNode, uv?: UVNode, radius?: number, size?: Vector2 );

	value: TextureNode;
	uv: UVNode;
	radius: Vector2Node;
	size: Vector2;
	blurX: boolean;
	blurY: boolean;
	horizontal: FloatNode;
	vertical: FloatNode;
	nodeType: string;

	updateFrame( frame: NodeFrame ): void;
	copy( source: BlurNode ): this;

	static Nodes: {
		blurX: FunctionNode;
		blurY: FunctionNode;
	}

}
