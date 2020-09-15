import { BufferGeometry } from "../../../src/core/BufferGeometry";
import { Curve } from "../../../src/extras/core/Curve";
import { Vector3 } from "../../../src/math/Vector3";
import { Mesh } from "../../../src/objects/Mesh";

export class RollerCoasterGeometry extends BufferGeometry {

	constructor(curve: Curve<Vector3>, divisions: number);

}

export class RollerCoasterLiftersGeometry extends BufferGeometry {

	constructor( curve: Curve<Vector3>, divisions: number );

}

export class RollerCoasterShadowGeometry extends BufferGeometry {

	constructor( curve: Curve<Vector3>, divisions: number );

}

export class SkyGeometry extends BufferGeometry {

	constructor( curve: Curve<Vector3>, divisions: number );

}

export class TreesGeometry extends BufferGeometry {

	constructor(landscape: Mesh);

}
