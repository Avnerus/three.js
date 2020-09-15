import { Color } from '../../../src/math/Color';
import { Pass } from './Pass';

export class ClearPass extends Pass {

	constructor(clearColor?: Color | string | number, clearAlpha?: number);
	clearColor: Color | string | number;
	clearAlpha: number;

}
