import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
   wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {target: {value:'new value'}});
        wrapped.find('textarea').update();
    });

    it('text area can be changed', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new value');
    });

    it('submit form results in empty text area area can be changed', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new value');
        wrapped.find('form').simulate('submit');
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});





