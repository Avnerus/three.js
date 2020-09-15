import { Vector2 } from '../../../src/math/Vector2';
import { WebGLRenderer } from '../../../src/renderers/WebGLRenderer';
import { SelectionBox } from './SelectionBox';

export class SelectionHelper {

	constructor(selectionBox: SelectionBox, renderer: WebGLRenderer, cssClassName: string);
	element: HTMLElement;
	isDown: boolean;
	pointBottomRight: Vector2;
	pointTopLeft: Vector2;
	renderer: WebGLRenderer;
	startPoint: Vector2;

	onSelectStart( event: Event ): void;
	onSelectMove( event: Event ): void;
	onSelectOver( event: Event ): void;

}
