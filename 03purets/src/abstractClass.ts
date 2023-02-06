abstract class TakePhotos {
	constructor(public cameraMode: string, public filter: string) {}

	abstract getSepia(): void
}

class Insta extends TakePhotos {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter)
	}

	getSepia(): void {
		console.log('Speia')
	}
}

const hs = new Insta('test', 'test', 9)
