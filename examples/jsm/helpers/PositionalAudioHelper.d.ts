import { PositionalAudio } from "../../../src/audio/PositionalAudio";
import { Line } from "../../../src/objects/Line";

export class PositionalAudioHelper extends Line {

	constructor(audio: PositionalAudio, range?: number, divisionsInnerAngle?: number, divisionsOuterAngle?: number);

	audio: PositionalAudio;
	range: number;
	divisionsInnerAngle: number;
	divisionsOuterAngle: number;

	dispose(): void;
	update(): void;

}
