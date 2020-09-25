import { Group } from '../../objects/Group';
import { XREventType, XRFrame, XRInputSource, XRReferenceSpace, XRHandedness } from './WebXR';

export type XRControllerEventType = XREventType | 'disconnected' | 'connected'

export class WebXRController {

	constructor();

	readonly handedness: XRHandedness;

	getTargetRaySpace(): Group;
	getGripSpace(): Group;
	dispatchEvent( event: { type: XRControllerEventType, data?: XRInputSource } ): this;
	disconnect( inputSource: XRInputSource ): this;
	update( inputSource: XRInputSource, frame: XRFrame, referenceSpace: XRReferenceSpace ): this;

}
