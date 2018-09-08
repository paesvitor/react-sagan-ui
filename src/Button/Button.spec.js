import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'

describe('Button Component', () => {
    it('Should render default label if label prop is empty', () => {
        const wrapper = shallow(<Button />)

        expect(wrapper.find('.button-label').text()).toEqual('No label')
    })

    it('Should render a label when label prop is passed', () => {
        const wrapper = shallow(<Button label='label' />)

        expect(wrapper.find('.button-label').text()).toEqual('label')
    })

    it('Should render flat button when inverted prop is false', () => {
        const wrapper = shallow(<Button />)

        expect(wrapper.find('FlatButton')).toHaveLength(1)
    })

    it('Should render inverted button when inverted prop is true', () => {
        const wrapper = shallow(<Button inverted />)

        expect(wrapper.find('InvertedButton')).toHaveLength(1)
    })
})
