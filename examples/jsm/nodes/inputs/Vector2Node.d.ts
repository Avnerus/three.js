import { Vector2 } from '../../../../src/math/Vector2';
import { InputNode } from '../core/InputNode';
import { NodeBuilder } from '../core/NodeBuilder';

export class Vector2Node extends InputNode {

	constructor(x: Vector2 | number, y?: number);

	value: Vector2;
	nodeType: string;

	generateReadonly( builder: NodeBuilder, output: string, uuid?: string, type?: string, ns?: string, needsUpdate?: boolean ): string;
	copy( source: Vector2Node ): this;

}
