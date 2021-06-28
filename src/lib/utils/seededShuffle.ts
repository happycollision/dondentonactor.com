/*
  Modified from:
    SeededShuffle - Node.js & Browser
    By Louis T. <louist@ltdev.im>
    https://github.com/LouisT/SeededShuffle/
*/
export const seededShuffle = new (class SeededShuffle {
	private __seed: number = undefined
	public get seed() {
		return this.__seed
	}

	public shuffle<T extends any[]>(arr: T, seed?: number, copy = true): T {
		this.setSeed(seed)
		const shuff = copy ? (arr.slice(0) as T) : arr,
			size = shuff.length,
			map = this.genMap(size)
		for (let i = size - 1; i > 0; i--) {
			shuff[i] = shuff.splice(map[size - 1 - i], 1, shuff[i])[0]
		}
		return shuff
	}

	public unshuffle<T extends any[]>(arr: T, seed?: number, copy = true): T {
		this.setSeed(seed)
		const shuff = copy ? (arr.slice(0) as T) : arr,
			size = shuff.length,
			map = this.genMap(size)
		for (let i = 1; i < size; i++) {
			shuff[i] = shuff.splice(map[size - 1 - i], 1, shuff[i])[0]
		}
		return shuff
	}

	private genMap(size: number) {
		const map = new Array(size)
		for (let x = 0; x < size; x++) {
			//Don't change these numbers.
			map[x] = (((this.__seed = (this.__seed * 9301 + 49297) % 233280) / 233280.0) * size) | 0
		}
		return map
	}

	setSeed(seed?: number) {
		return seed && (this.__seed = seed)
	}
})()

seededShuffle.setSeed(123)
