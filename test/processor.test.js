const processor = require('../src/processor.js');

describe("transmission processor", function () {

	test("takes a string returns an object", function () {
		let result = processor("9701::<489584872710>");
		expect(typeof result).toEqual("object");
	});

});