import { Color } from '../../../../../src/math/Color';
import { Vector2 } from '../../../../../src/math/Vector2';
import { NodeBuilder } from '../../core/NodeBuilder';
import { PropertyNode } from '../../inputs/PropertyNode';
import { StandardNode } from './StandardNode';

export class MeshStandardNode extends StandardNode {

	constructor();

	properties: {
		color: Color;
		roughness: number;
		metalness: number;
		normalScale: Vector2;
	}

	inputs: {
		color: PropertyNode
		roughness: PropertyNode
		metalness: PropertyNode
		normalScale: PropertyNode
	}

	build( builder: NodeBuilder ): string;

}
