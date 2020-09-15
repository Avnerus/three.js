import { Pass } from './Pass';
import { Vector2 } from '../../../src/math/Vector2';
import { Scene } from '../../../src/scenes/Scene';
import { Camera } from '../../../src/cameras/Camera';
import { Object3D } from '../../../src/core/Object3D';
import { Color } from '../../../src/math/Color';
import { MeshBasicMaterial, MeshDepthMaterial, ShaderMaterial } from '../../../src/materials/Materials';
import { WebGLRenderTarget } from '../../../src/renderers/WebGLRenderTarget';
import { Matrix4 } from '../../../src/math/Matrix4';
import { Texture } from '../../../src/textures/Texture';

export class OutlinePass extends Pass {

	constructor(resolution: Vector2, scene: Scene, camera: Camera, selectedObjects?: Object3D[]);
	renderScene: Scene;
	renderCamera: Camera;
	selectedObjects: Object3D[];
	visibleEdgeColor: Color;
	hiddenEdgeColor: Color;
	edgeGlow: number;
	usePatternTexture: boolean;
	edgeThickness: number;
	edgeStrength: number;
	downSampleRatio: number;
	pulsePeriod: number;
	resolution: Vector2;
	patternTexture: Texture;

	maskBufferMaterial: MeshBasicMaterial;
	renderTargetMaskBuffer: WebGLRenderTarget;
	depthMaterial: MeshDepthMaterial;
	prepareMaskMaterial: ShaderMaterial;
	renderTargetDepthBuffer: WebGLRenderTarget;
	renderTargetMaskDownSampleBuffer: WebGLRenderTarget;
	renderTargetBlurBuffer1: WebGLRenderTarget;
	renderTargetBlurBuffer2: WebGLRenderTarget;
	edgeDetectionMaterial: ShaderMaterial;
	renderTargetEdgeBuffer1: WebGLRenderTarget;
	renderTargetEdgeBuffer2: WebGLRenderTarget;
	separableBlurMaterial1: ShaderMaterial;
	separableBlurMaterial2: ShaderMaterial;
	overlayMaterial: ShaderMaterial;
	copyUniforms: object;
	materialCopy: ShaderMaterial;
	oldClearColor: Color;
	oldClearAlpha: number;
	fsQuad: object;
	tempPulseColor1: Color;
	tempPulseColor2: Color;
	textureMatrix: Matrix4;

	dispose(): void;
	changeVisibilityOfSelectedObjects( bVisible: boolean ): void;
	changeVisibilityOfNonSelectedObjects( bVisible: boolean ): void;
	updateTextureMatrix(): void;
	getPrepareMaskMaterial(): ShaderMaterial;
	getEdgeDetectionMaterial(): ShaderMaterial;
	getSeperableBlurMaterial(): ShaderMaterial;
	getOverlayMaterial(): ShaderMaterial;

}
