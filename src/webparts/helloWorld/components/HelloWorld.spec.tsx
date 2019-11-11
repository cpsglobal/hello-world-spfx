import * as React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { HelloWorld, IHelloWorldProps } from './HelloWorld';

describe('HelloWorld', () => {

    const props: IHelloWorldProps = {
        title: 'Welcome to SharePoint Framework!',
        subTitle: 'Customize SharePoint experiences using Web Parts and Extensions.',
        description: 'HelloWorld',
        buttonText: 'Get Started!',
        buttonTarget: 'https://aka.ms/spfx'
    };

    let wrapper: ShallowWrapper;

    beforeAll(() => {
        wrapper = shallow(<HelloWorld {...props} />);
    });

    it('displays title', () => {
        expect(wrapper.find('.title').text()).toEqual(props.title);
    });

    it('displays subtitle', () => {
        expect(wrapper.find('.subTitle').contains(props.subTitle)).toBe(true);
    });

    it('displays description', () => {
        expect(wrapper.contains(props.description)).toBe(true);
    });

    it('displays learn more as button', () => {
        expect(wrapper.find('a.button').text()).toEqual(props.buttonText);
    });

    it('learn more button has correct url', () => {
        expect(wrapper.find('a.button').props().href).toEqual(props.buttonTarget);
    });

});