import React from 'react'
import { mount} from 'enzyme'
import DogeComponent from './DogeComponent.jsx'

describe('<DogeComponent/>', () => {
	it('todoges should be rendered correctly', function () {
		const todos = [
			'Very todo', 'Much app', 'Such words', 'Dare type', 'Advise', 'So work'
		];
		
		const wrapper = mount(<DogeComponent todoges={ todos } />);

		let todoge = wrapper.find('.doge-text-one');
		expect(todoge.text()).toBe('Very todo');

		todoge = wrapper.find('.doge-text-two');
		expect(todoge.text()).toBe('Much app');

		todoge = wrapper.find('.doge-text-three');
		expect(todoge.text()).toBe('Such words');

		todoge = wrapper.find('.doge-text-four');
		expect(todoge.text()).toBe('Dare type');

		todoge = wrapper.find('.doge-text-five');
		expect(todoge.text()).toBe('Advise');

		todoge = wrapper.find('.doge-text-six');
		expect(todoge.text()).toBe('So work');
	});
});