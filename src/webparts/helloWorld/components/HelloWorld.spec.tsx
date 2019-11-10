import * as React from 'react';
import HelloWorld from "./HelloWorld";
import { shallow, ShallowWrapper } from "enzyme";

describe('HelloWorld', () => {

    const description = 'HelloWorld';
    let wrapper: ShallowWrapper;

    beforeAll(() => {
        wrapper = shallow(<HelloWorld description={description} />);
    });

    it('displays title', () => {
        expect(wrapper.contains('Welcome to SharePoint!')).toBe(true);
    });

    it('displays subtitle', () => {
        expect(wrapper.contains('Customize SharePoint experiences using Web Parts.')).toBe(true);
    });

    it('displays description', () => {
        expect(wrapper.contains('HelloWorld')).toBe(true);
    });

    it('displays learn more as button', () => {
        expect(wrapper.find('a.button').text()).toEqual('Learn more');
    });

    it('learn more button has correct url', () => {
        expect(wrapper.find('a.button').props().href).toEqual('https://aka.ms/spfx');
    });

});