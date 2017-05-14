import { readFromSessionStorageTest, writeToSessionStorageTest, readPropsFromQueryTest, createLinkFromTodosTest } from './index';

var dummyTodos = [
	{
		id: 1,
		text: 'lorem ipsum'
	},
	{
		id: 2,
		text: 'ipsum lorem'
	}
];

it('creates a VALID url link from todos and recreates the todos from that link', () => {
	let link = createLinkFromTodosTest(dummyTodos, '');
	let todos = readPropsFromQueryTest(link);
	expect(todos).toEqual(dummyTodos);
});

it('tries to read an INVALID url link and returns the fallback props', () => {
	let todos = readPropsFromQueryTest('link', []);
	expect(todos).toEqual([]);
});

// Storage Mock
function storageMock() {
	var storage = {};

	return {
		setItem: function(key, value) {
			storage[key] = value || '';
		},
		getItem: function(key) {
			return key in storage ? storage[key] : null;
		},
		removeItem: function(key) {
			delete storage[key];
		},
		get length() {
			return Object.keys(storage).length;
		},
		key: function(i) {
			var keys = Object.keys(storage);
			return keys[i] || null;
		}
	};
};

var sessionStorage = storageMock();

it('writes props to sessionStorage and recreates the props from sessionStorage.', () => {
	writeToSessionStorageTest(sessionStorage, 'TEST', dummyTodos);
	let todos = readFromSessionStorageTest(sessionStorage, 'TEST', []);
	expect(todos).toEqual(dummyTodos);
});