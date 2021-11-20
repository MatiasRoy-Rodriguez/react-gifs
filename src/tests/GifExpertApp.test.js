import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp'


describe('Prueba en <GifExpertApp />', () => {

	test('Debe mostarse correctamente ', () => {

		const wrapper = shallow(<GifExpertApp />)

		expect(wrapper).toMatchSnapshot();

	})

	test('Debe de mostrar una lista de categorias', () => {
		
		const categories = ['DBZ', 'Movies'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find('GifGird').length).toBe( categories.length );

	})
	

})