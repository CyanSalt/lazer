export class Lazer {

	constructor(generator) {
		this[Symbol.iterator] = generator
		// this[Symbol.isConcatSpreadable] = true
		return this
	}

	static from(...args) {
		// Array.prototype.values
		return new Lazer(function*(){
			yield* Array.from(...args)
		})
	}

	filter(callback, thisArg) {
		return new Lazer(function*(){
			const fn = callback.bind(thisArg)
			let i = 0
			for (let item of this) {
				if (fn(item, i++, this)) yield item
			}
		}.bind(this))
	}

	map(callback, thisArg) {
		return new Lazer(function*(){
			const fn = callback.bind(thisArg)
			let i = 0
			for (let item of this) {
				yield fn(item, i++, this)
			}
		}.bind(this))
	}

	reduce(callback, ...args) {
		let i = 0, accum, empty = true
		if (args.length) {
			empty = false
			accum = args[0]
		}
		for (let item of this) {
			if (empty) {
				accum = item
				continue
			}
			accum = callback(accum, item, i++, this)
		}
		return accum
	}

	gen() {
		return [...this]
	}

}
