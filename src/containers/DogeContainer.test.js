import { mapStateToProps } from './DogeContainer.js';

describe("DogeContainer", () => {
	function todoFn(text) {
		return {
			text
		}
	}
	it("creates 6 todoges from 2 todos, with the other 4 being empty strings.", () => {
		const todos = [
			todoFn('Much app'), 
			todoFn('Dare type')
		];

		const todoges = mapStateToProps( { todos } ).todoges;
		expect(todoges.length).toEqual(6);
		expect(todoges[0]).toEqual('Much app');
		expect(todoges[1]).toEqual('Dare type');
		expect(todoges[2]).toEqual('');
		expect(todoges[3]).toEqual('');
		expect(todoges[4]).toEqual('');
		expect(todoges[5]).toEqual('');
	});

	it("creates 6 todoges from 6 todos.", () => {
		const todos = [
			todoFn('Much app'), 
			todoFn('Dare type'), 
			todoFn('Advise'), 
			todoFn('So work'), 
			todoFn('Such words'), 
			todoFn('Very todo')
		];

		const todoges = mapStateToProps( { todos } ).todoges;
		expect(todoges.length).toEqual(6);
		expect(todoges[0]).toEqual('Much app');
		expect(todoges[1]).toEqual('Dare type');
		expect(todoges[2]).toEqual('Advise');
		expect(todoges[3]).toEqual('So work');
		expect(todoges[4]).toEqual('Such words');
		expect(todoges[5]).toEqual('Very todo');
	});

	it("creates 6 todoges from 7 todos, using the most recent 6 todos.", () => {
		const todos = [
			todoFn('Much app'), 
			todoFn('Dare type'), 
			todoFn('Advise'), 
			todoFn('So work'), 
			todoFn('Such words'), 
			todoFn('Very todo'),
			todoFn('Wow')
		];

		const todoges = mapStateToProps( { todos } ).todoges;
		expect(todoges.length).toEqual(6);
		expect(todoges[0]).toEqual('Dare type');
		expect(todoges[1]).toEqual('Advise');
		expect(todoges[2]).toEqual('So work');
		expect(todoges[3]).toEqual('Such words');
		expect(todoges[4]).toEqual('Very todo');
		expect(todoges[5]).toEqual('Wow');
	});
})