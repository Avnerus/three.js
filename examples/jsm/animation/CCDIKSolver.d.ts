import { SkinnedMesh } from "../../../src/objects/SkinnedMesh";

export interface IKS {
	effector: number;
	iteration: number;
	links: {
		enabled: boolean;
		index: number;
	}
	maxAngle: number;
	target: number;
}

export class CCDIKSolver {

	constructor( mesh: SkinnedMesh, iks: IKS[] );

	update(): this;
	createHelper(): CCDIKHelper;

}

export class CCDIKHelper {

	constructor( mesh: SkinnedMesh, iks: IKS[] );

}
